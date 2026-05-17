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

export interface PartialIconAndTexts extends Struct.ComponentSchema {
  collectionName: 'components_partial_icon_and_texts';
  info: {
    displayName: 'Icon And Texts';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface PartialIconWithLabel extends Struct.ComponentSchema {
  collectionName: 'components_partial_icon_with_labels';
  info: {
    displayName: 'Icon With Label';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

export interface PartialIconWithLink extends Struct.ComponentSchema {
  collectionName: 'components_partial_icon_with_links';
  info: {
    displayName: 'Icon With Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface PartialLabel extends Struct.ComponentSchema {
  collectionName: 'components_partial_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface PartialMainTitles extends Struct.ComponentSchema {
  collectionName: 'components_partial_main_titles';
  info: {
    displayName: 'Main Titles';
  };
  attributes: {
    items: Schema.Attribute.Component<'partial.icon-with-label', true>;
    prefixTitle: Schema.Attribute.String;
    suffixTitle: Schema.Attribute.String;
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

export interface PartialProjectCards extends Struct.ComponentSchema {
  collectionName: 'components_partial_project_cards';
  info: {
    displayName: 'Project Cards';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
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

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    displayName: '03. Cards';
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
    layout: Schema.Attribute.Enumeration<
      ['Flat (Default)', 'Scroll Sticky', 'Segmented', 'Circular Rotation']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Scroll Sticky'>;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionCardsFlipScroll extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_flip_scrolls';
  info: {
    displayName: 'Cards Flip Scroll';
  };
  attributes: {
    bg_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionCardsFlipSegmented extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_flip_segmenteds';
  info: {
    displayName: 'Cards Flip Segmented';
  };
  attributes: {
    bg_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    items: Schema.Attribute.Component<'partial.project-cards', true>;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionContactForm extends Struct.ComponentSchema {
  collectionName: 'components_section_contact_forms';
  info: {
    displayName: '05. Contact Form';
  };
  attributes: {
    title: Schema.Attribute.String;
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

export interface SectionHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_home_banners';
  info: {
    displayName: '01. Home Banner';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'partial.button', true>;
    coverTitle: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    marquee: Schema.Attribute.Component<'partial.icon-with-label', true>;
    titles: Schema.Attribute.Component<'partial.main-titles', false>;
  };
}

export interface SectionIntro extends Struct.ComponentSchema {
  collectionName: 'components_section_intros';
  info: {
    displayName: '02. Intro';
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
    title: Schema.Attribute.String;
  };
}

export interface SectionRepeatedLine extends Struct.ComponentSchema {
  collectionName: 'components_section_repeated_lines';
  info: {
    displayName: '04. Repeated Line';
  };
  attributes: {
    items: Schema.Attribute.Component<'partial.label', true>;
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
      'partial.icon-and-texts': PartialIconAndTexts;
      'partial.icon-with-label': PartialIconWithLabel;
      'partial.icon-with-link': PartialIconWithLink;
      'partial.label': PartialLabel;
      'partial.main-titles': PartialMainTitles;
      'partial.media-text-item': PartialMediaTextItem;
      'partial.menu-item': PartialMenuItem;
      'partial.project-cards': PartialProjectCards;
      'partial.slide': PartialSlide;
      'partial.submenu-item': PartialSubmenuItem;
      'section.cards': SectionCards;
      'section.cards-flip-scroll': SectionCardsFlipScroll;
      'section.cards-flip-segmented': SectionCardsFlipSegmented;
      'section.contact-form': SectionContactForm;
      'section.hero-slideshow': SectionHeroSlideshow;
      'section.home-banner': SectionHomeBanner;
      'section.intro': SectionIntro;
      'section.repeated-line': SectionRepeatedLine;
      'section.text-with-media': SectionTextWithMedia;
    }
  }
}
