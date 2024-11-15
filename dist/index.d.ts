import { API, BlockAPI, BlockTool, ToolConfig } from '@editorjs/editorjs';
import { MenuConfig } from '@editorjs/editorjs/types/tools';

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
declare enum Alignment {
    Left = "left",
    Center = "center"
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
    private _quotePlaceholder;
    /**
     * Current quote element
     */
    private _block;
    /**
     * Caption placeholder for Quote Tool
     */
    private _captionPlaceholder;
    /**
     * Quote's data
     */
    private _data;
    /**
     * Quote Tool's CSS classes
     */
    private _CSS;
    /**
     * Default border color for the quote.
     */
    private _defaultBorderColor;
    /**
     * Border colors for the quote.
     */
    private _borderColors;
    /**
     * Root element for the quote.
     */
    private _element;
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {QuoteData} params.data - previously saved data
     * @param {QuoteConfig} params.config - user config for Tool
     * @param {API} params.api - editor.js api
     * @param {boolean} params.readOnly - read only mode flag
     */
    constructor({ data, config, api, readOnly, block }: QuoteParams);
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: string;
        title: "Quote";
    };
    /**
     * Empty Quote is not empty Block
     *
     * @public
     * @returns {boolean}
     */
    static get contentless(): boolean;
    /**
     * Allow to press Enter inside the Quote
     *
     * @public
     * @returns {boolean}
     */
    static get enableLineBreaks(): boolean;
    /**
     * Default placeholder for quote text
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_QUOTE_PLACEHOLDER(): string;
    /**
     * Default placeholder for quote caption
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_CAPTION_PLACEHOLDER(): string;
    /**
     * Default border color for the quote.
     *
     * @public
     * @returns {string}
     *
     */
    static get DEFAULT_BORDER_COLOR(): string;
    /**
     * Default border colors for the quote.
     *
     * @public
     * @returns {QuoteConfig['borderColors']}
     */
    static get DEFAULT_BORDER_COLORS(): QuoteConfig['borderColors'];
    /**
     * Default quote alignment
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_ALIGNMENT(): Alignment;
    /**
     * Allow Quote to be converted to/from other blocks
     */
    static get conversionConfig(): {
        /**
         * To create Quote data from string, simple fill 'text' property
         */
        import: string;
        /**
         * To create string from Quote data, concatenate text and caption
         *
         * @param {QuoteData} quoteData
         * @returns {string}
         */
        export: (quoteData: QuoteData) => string;
    };
    /**
     * Tool`s styles
     *
     * @returns {QuoteCSS}
     */
    get CSS(): QuoteCSS;
    /**
     * Tool`s settings properties
     *
     * @returns {*[]}
     */
    get alignmentSettings(): {
        name: Alignment;
        icon: string;
    }[];
    /**
     * Create Quote Tool container with inputs
     *
     * @returns {Element}
     */
    render(): HTMLElement;
    /**
     * Extract Quote data from Quote Tool element
     *
     * @param {HTMLDivElement} quoteElement - element to save
     * @returns {QuoteData}
     */
    save(quoteElement: HTMLDivElement): QuoteData;
    /**
     * Sanitizer rules
     */
    static get sanitize(): {
        text: {
            font: boolean;
            br: boolean;
            a: boolean;
            i: boolean;
            b: boolean;
            s: boolean;
        };
        caption: {
            br: boolean;
        };
        alignment: {};
    };
    /**
     * Create wrapper for Tool`s settings buttons:
     * 1. Left alignment
     * 2. Center alignment
     *
     * @returns {MenuConfig}
     *
     */
    renderSettings(): HTMLElement | MenuConfig;
    /**
     * Toggle quote`s alignment
     *
     * @param {string} tune - alignment
     * @private
     */
    _toggleAlignmentTune(tune: Alignment): void;
    /**
     * Toggle quote's border color
     *
     * @param {string} color - border color
     * @private
     */
    _toggleBorderColor(color: string): void;
}
export {};
