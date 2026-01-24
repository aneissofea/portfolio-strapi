// services/SlugifyService.ts

import type {Core} from '@strapi/strapi';
import {slugify} from 'transliteration';

// List of reserved words that shouldn't be used as slugs
const RESERVED_WORDS = [
  'admin',
  'api',
  'login',
  'logout',
  'register',
  'dashboard',
  'settings'];

export async function processSlug(
    text: string, strapi: any, contentType: string,
    existingId?: number): Promise<string> {
  // Replace all punctuation with dashes in Latin segments
  const punctuationProcessed = text.replace(/[^\p{L}\p{N}]+/gu, '-');

  // Split the text into Latin and non-Latin segments
  const latinPattern = /[a-zA-Z0-9._-]+/g;
  const segments = [];
  let match;
  let lastIndex = 0;

  // Extract all Latin segments
  while ((match = latinPattern.exec(punctuationProcessed)) !== null) {
    // If there's non-Latin text before this match, add it
    if (match.index > lastIndex) {
      const nonLatinText = punctuationProcessed.substring(lastIndex,
          match.index);
      if (nonLatinText.trim()) {
        segments.push(slugify(nonLatinText));
      }
    }

    // Add the Latin segment (already has punctuation converted to dashes)
    segments.push(match[0]);
    lastIndex = match.index + match[0].length;
  }

  // If there's remaining non-Latin text, add it
  if (lastIndex < punctuationProcessed.length) {
    const nonLatinText = punctuationProcessed.substring(lastIndex);
    if (nonLatinText.trim()) {
      segments.push(slugify(nonLatinText));
    }
  }

// Join segments with dashes and clean up the result
  let slug = segments.join('-').
      toLowerCase().
      replace(/-+/g,
          '-') // Replace multiple consecutive dashes with a single dash
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing dashes

  // Limit slug length to 75 characters (good for SEO and URL length limits)
  if (slug.length > 75) {
    slug = slug.substring(0, 75).replace(/-+$/, '');
  }

  // Check if slug is a reserved word
  if (RESERVED_WORDS.includes(slug)) {
    slug = `content-${slug}`;
  }

  // Check for uniqueness and add a suffix if needed
  let isUnique = false;
  let counter = 0;
  let uniqueSlug = slug;

  while (!isUnique) {
    // Query the database to check if the slug exists
    const existingEntries = await strapi.db.query(contentType).findMany({
      where: {
        slug: uniqueSlug,
        ...(existingId ? {id: {$ne: existingId}} : {}),
      },
    });

    if (existingEntries.length === 0) {
      isUnique = true;
    } else {
      counter++;
      uniqueSlug = `${slug}-${counter}`;

      // If adding the counter makes the slug too long, trim the original part
      if (uniqueSlug.length > 75) {
        const counterSuffix = `-${counter}`;
        slug = slug.substring(0, 75 - counterSuffix.length);
        uniqueSlug = `${slug}${counterSuffix}`;
      }
    }
  }

  return uniqueSlug;
}

export async function setupSlugifyMiddleware(strapi: any) {
  strapi.db.lifecycles.subscribe({
    async beforeCreate(event: any) {
      const { data } = event.params;
      const model = event.model;

      if (model && model.attributes && model.attributes.title &&
          model.attributes.slug && model.attributes.slug.type === 'uid' &&
          data && data.title) {
        // Only generate slug if it's not provided
        if (!data.slug) {
          try {
            data.slug = await processSlug(data.title, strapi, model.uid);
            console.log(`Slugified title "${data.title}" to "${data.slug}"`);
          } catch (error) {
            console.error('Error generating slug:', error);
          }
        }
      }
    },

    async beforeUpdate(event: any) {
      const { data, where } = event.params;
      const model = event.model;

      // Only proceed if we're updating the title
      if (!data || !data.title || !model || !model.attributes ||
          !model.attributes.slug || model.attributes.slug.type !== 'uid') {
        return;
      }

      try {
        // Get the current entry to check if slug was manually edited
        const id = where?.id;
        if (!id) return;

        const currentEntry = await strapi.db.query(model.uid).findOne({
          where: { id }
        });

        // Only auto-generate slug if:
        // 1. Title has changed AND
        // 2. Either slug is empty OR slug still matches the old auto-generated value
        if (currentEntry &&
            data.title !== currentEntry.title &&
            (!data.slug || data.slug === currentEntry.slug)) {
          data.slug = await processSlug(data.title, strapi, model.uid, id);
          console.log(`Slugified title "${data.title}" to "${data.slug}"`);
        }
      } catch (error) {
        console.error('Error generating slug:', error);
      }
    }
  });

  console.log('Enhanced slugify middleware setup complete');
}