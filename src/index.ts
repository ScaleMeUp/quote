/**
 * Build styles
 */
import "./index.css";

import { IconAlignLeft, IconAlignCenter, IconQuote } from "@codexteam/icons";
import { Icon as BorderColorIcon } from "./icons/border-color";
import { Icon as BorderColorFilledIcon } from "./icons/border-color-filled";

import { make } from "@editorjs/dom";
import type { API, BlockAPI, BlockTool, ToolConfig } from "@editorjs/editorjs";
import { MenuConfig } from "@editorjs/editorjs/types/tools";

/**
 * @typedef {object} QuoteConfig
 * @description Quote Tool`s initial configuration
 * @property {string} quotePlaceholder - placeholder to show in quote`s text input
 * @property {string} captionPlaceholder - placeholder to show in quote`s caption input
 * @property {'center'|'left'} defaultAlignment - alignment to use as default
 */
export interface QuoteConfig extends ToolConfig {
  /**
   * Placeholder text to display in the quote's text input.
   */
  quotePlaceholder: string;

  /**
   * Placeholder text to display in the quote's caption input.
   */
  captionPlaceholder: string;

  /**
   * Default alignment for the quote.
   */
  defaultAlignment: Alignment;

  /**
   * Default border color for the quote.
   */
  defaultBorderColor: string;

  /**
   * Border colors for the quote.
   */
  borderColors: {
    name: string;
    color: string;
  }[];
}

/**
 * @typedef {object} QuoteData
 * @description Quote Tool`s input and output data
 * @property {string} text - quote`s text
 * @property {string} caption - quote`s caption
 * @property {'center'|'left'} alignment - quote`s alignment
 */
export interface QuoteData {
  /**
   * The text of the quote.
   */
  text: string;

  /**
   * The caption for the quote.
   */
  caption: string;

  /**
   * The alignment of the quote.
   */
  alignment: Alignment;

  /**
   * The border color of the quote.
   */
  borderColor: string;
}

/**
 * @typedef {object} QuoteParams
 * @description Constructor params for the Quote tool, use to pass initial data and settings
 * @property {QuoteData} data - Preload data for the quote.
 * @property {QuoteConfig} config - The configuration for the quote.
 * @property {API} api - The Editor.js API.
 * @property {boolean} readOnly - Is quote is read-only.
 * @property {BlockAPI} block - BlockAPI object of Quote.
 */
interface QuoteParams {
  /**
   * Initial data for the quote
   */
  data: QuoteData;
  /**
   * Quote tool configuration
   */
  config: QuoteConfig;
  /**
   * Editor.js API
   */
  api: API;
  /**
   * Is quote read-only.
   */
  readOnly: boolean;
  /**
   * BlockAPI object of Quote.
   */
  block: BlockAPI;
}

/**
 * @typedef {object} QuoteCSS
 * @description CSS classes names
 * @property {string} block - Editor.js CSS Class for block
 * @property {string} wrapper - Quote CSS Class
 */
interface QuoteCSS {
  /**
   * Editor.js CSS Class for block
   */
  baseClass: string;
  /**
   * Quote CSS Class
   */
  wrapper: string;
  /**
   * Quote CSS Class
   */
  input: string;
  /**
   * Quote CSS Class
   */
  text: string;
  /**
   * Quote CSS Class
   */
  caption: string;
  /**
   * Quote CSS Class
   */
  borderColorIconWrapper: string;
}

/**
 * @typedef {Enum} Alignment
 * @description Enum for Quote Alignment
 */
enum Alignment {
  Left = "left",
  Center = "center",
}

/**
 * @class Quote
 * @classdesc Quote Tool for Editor.js
 * @property {QuoteData} data - Tool`s input and output data
 * @propert {API} api - Editor.js API instance
 */
export default class Quote implements BlockTool {
  /**
   * The Editor.js API
   */
  api: API;
  /**
   * Is Quote Tool read-only
   */
  readOnly: boolean;

  /**
   * Placeholder for Quote Tool
   */
  private _quotePlaceholder: string;

  /**
   * Current quote element
   */
  private _block: BlockAPI;
  /**
   * Caption placeholder for Quote Tool
   */
  private _captionPlaceholder: string;
  /**
   * Quote's data
   */
  private _data: QuoteData;
  /**
   * Quote Tool's CSS classes
   */
  private _CSS: QuoteCSS;
  /**
   * Default border color for the quote.
   */
  private _defaultBorderColor: string;
  /**
   * Border colors for the quote.
   */
  private _borderColors: QuoteConfig['borderColors'];
  /**
   * Root element for the quote.
   */
  private _element: HTMLElement | null;

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {QuoteData} params.data - previously saved data
   * @param {QuoteConfig} params.config - user config for Tool
   * @param {API} params.api - editor.js api
   * @param {boolean} params.readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly, block }: QuoteParams) {
    const { DEFAULT_ALIGNMENT } = Quote;

    this.api = api;
    this.readOnly = readOnly;

    this._quotePlaceholder =
      config.quotePlaceholder || Quote.DEFAULT_QUOTE_PLACEHOLDER;

    this._captionPlaceholder =
      config.captionPlaceholder || Quote.DEFAULT_CAPTION_PLACEHOLDER;

    this._defaultBorderColor = config.defaultBorderColor || Quote.DEFAULT_BORDER_COLOR;
    this._borderColors = config.borderColors || Quote.DEFAULT_BORDER_COLORS;

    this._data = {
      text: data.text || "",
      caption: data.caption || "",
      alignment:
        (Object.values(Alignment).includes(data.alignment as Alignment) &&
          data.alignment) ||
        config.defaultAlignment ||
        DEFAULT_ALIGNMENT,
      borderColor: data.borderColor || this._defaultBorderColor,
    };

    this._CSS = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption",
      borderColorIconWrapper: "cdx-quote__border-color-icon-wrapper",
    };

    this._block = block;

    this._element = null
  }

  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox(): { icon: string; title: "Quote" } {
    return {
      icon: IconQuote,
      title: "Quote",
    };
  }

  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless(): boolean {
    return true;
  }

  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks(): boolean {
    return true;
  }

  /**
   * Default placeholder for quote text
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_QUOTE_PLACEHOLDER(): string {
    return "Enter a quote";
  }

  /**
   * Default placeholder for quote caption
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_CAPTION_PLACEHOLDER(): string {
    return "Enter a caption";
  }

  /**
   * Default border color for the quote.
   *
   * @public
   * @returns {string}
   *
   */
  static get DEFAULT_BORDER_COLOR(): string {
    return '#000000';
  }

    /**
     * Default border colors for the quote.
     *
     * @public
     * @returns {QuoteConfig['borderColors']}
     */
    static get DEFAULT_BORDER_COLORS(): QuoteConfig['borderColors'] {
        return [
          {
            name: 'Black',
            color: '#000000',
          }
        ];
    }

  /**
   * Default quote alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT(): Alignment {
    return Alignment.Left;
  }

  /**
   * Allow Quote to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       *
       * @param {QuoteData} quoteData
       * @returns {string}
       */
      export: function (quoteData: QuoteData): string {
        return quoteData.caption
          ? `${quoteData.text} — ${quoteData.caption}`
          : quoteData.text;
      },
    };
  }

  /**
   * Tool`s styles
   *
   * @returns {QuoteCSS}
   */
  get CSS(): QuoteCSS {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption",
      borderColorIconWrapper: "cdx-quote__border-color-icon-wrapper",
    };
  }

  /**
   * Tool`s settings properties
   *
   * @returns {*[]}
   */
  get alignmentSettings(): { name: Alignment; icon: string }[] {
    return [
      {
        name: Alignment.Left,
        icon: IconAlignLeft,
      },
      {
        name: Alignment.Center,
        icon: IconAlignCenter,
      },
    ];
  }

  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render(): HTMLElement {
    const container = make("blockquote", [
      this._CSS.baseClass,
      this._CSS.wrapper,
    ], {
      style: `border-left: 5px solid ${this._data.borderColor}`,
    });

    const quote = make("div", [this._CSS.input, this._CSS.text], {
      contentEditable: !this.readOnly,
      innerHTML: this._data.text,
    });

    const caption = make("div", [this._CSS.input, this._CSS.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this._data.caption,
    });

    quote.dataset.placeholder = this._quotePlaceholder;
    caption.dataset.placeholder = this._captionPlaceholder;

    container.appendChild(quote);
    container.appendChild(caption);

    this._element = container;

    return container;
  }

  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(quoteElement: HTMLDivElement): QuoteData {
    const text = quoteElement.querySelector(`.${this._CSS.text}`);
    const caption = quoteElement.querySelector(`.${this._CSS.caption}`);

    return Object.assign(this._data, {
      text: text?.innerHTML ?? "",
      caption: caption?.innerHTML ?? "",
    });
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        font: true,
        br: true,
        a: true,
        i: true,
        b: true,
        s: true,
      },
      caption: {
        br: true,
      },
      alignment: {},
    };
  }

  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   *
   * @returns {MenuConfig}
   *
   */
  renderSettings(): HTMLElement | MenuConfig {
    const capitalize = (str: string) =>
      str ? str[0].toUpperCase() + str.slice(1) : str;

    const alignmentOptions = this.alignmentSettings.map((item) => ({
      icon: item.icon,
      title: this.api.i18n.t(capitalize(item.name)),
      onActivate: () => this._toggleAlignmentTune(item.name),
      isActive: this._data.alignment === item.name,
      closeOnActivate: true,
    }));

    const borderColors = this._borderColors.map((item) => {
      const icon = `
        <span 
            class="${this._CSS.borderColorIconWrapper}"
            style="color: ${item.color};"
        >
           ${BorderColorFilledIcon}
        </span>
      `

      return {
        icon: icon,
        title: this.api.i18n.t(item.name),
        onActivate: () => this._toggleBorderColor(item.color),
        isActive: this._data.borderColor === item.color,
        closeOnActivate: true,
      };
    })

    return [
        {
          name: 'alignment',
          title: 'Alignment',
          icon: IconAlignLeft,
          children: {
            items: alignmentOptions
          },
        },

        {
          name: 'border',
          icon: BorderColorIcon,
          title: 'Border color',
          children: {
            items: borderColors,
          },
        },
    ];
  }

  /**
   * Toggle quote`s alignment
   *
   * @param {string} tune - alignment
   * @private
   */
  _toggleAlignmentTune(tune: Alignment) {
    this._data.alignment = tune;

    // Dispatch change if quoteElement already exists
    this._block.dispatchChange();
  }

  /**
   * Toggle quote's border color
   *
   * @param {string} color - border color
   * @private
   */
  _toggleBorderColor(color: string) {
    this._data.borderColor = color;

    if (this._element) {
      this._element.style.borderLeft = `5px solid ${color}`;
    }

    // Dispatch change if quoteElement already exists
    this._block.dispatchChange();
  }
}
