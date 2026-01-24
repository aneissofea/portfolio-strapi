import type { Schema, Struct } from '@strapi/strapi';

export interface PartialButton extends Struct.ComponentSchema {
  collectionName: 'components_partial_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    openLinkInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface PartialMediaTextItem extends Struct.ComponentSchema {
  collectionName: 'components_partial_media_text_items';
  info: {
    description: '';
    displayName: 'Media Text Item';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'partial.button', true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'>;
    mediaOnLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos', true>;
  };
}

export interface PartialMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_partial_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
  };
  attributes: {
    items: Schema.Attribute.Component<'partial.submenu-item', true>;
    label: Schema.Attribute.String;
    open_link_in_new_tab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface PartialSlide extends Struct.ComponentSchema {
  collectionName: 'components_partial_slides';
  info: {
    description: '';
    displayName: 'Slide';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'partial.button', true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos', true>;
  };
}

export interface PartialSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_partial_submenu_items';
  info: {
    description: '';
    displayName: 'Submenu Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    openLinkInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String;
  };
}

export interface SectionHeroSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_slideshows';
  info: {
    displayName: 'Hero Slideshow';
  };
  attributes: {
    Slides: Schema.Attribute.Component<'partial.slide', true>;
  };
}

export interface SectionTextWithMedia extends Struct.ComponentSchema {
  collectionName: 'components_section_text_with_medias';
  info: {
    displayName: 'Text With Media';
  };
  attributes: {
    media_text_items: Schema.Attribute.Component<
      'partial.media-text-item',
      false
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'partial.button': PartialButton;
      'partial.media-text-item': PartialMediaTextItem;
      'partial.menu-item': PartialMenuItem;
      'partial.slide': PartialSlide;
      'partial.submenu-item': PartialSubmenuItem;
      'section.hero-slideshow': SectionHeroSlideshow;
      'section.text-with-media': SectionTextWithMedia;
    }
  }
}
