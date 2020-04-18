/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PaintModus, } from "./models/paintModus";
import { Settings, } from "./models/settingsModel";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface MvjpCanvasMatrix {
        /**
          * choosen colorcode
         */
        "choosenColour": number;
        /**
          * active sprite tile
         */
        "indexTileMatrix": number;
        /**
          * state of the entire matrix
         */
        "matrix": number[][][];
        /**
          * brush or bucket
         */
        "paintModus": PaintModus;
        /**
          * set matrix
         */
        "setMatrix": Function;
        /**
          * application settings
         */
        "settings": Settings;
    }
    interface MvjpCanvasMatrixTile {
        /**
          * color code of this tile
         */
        "colour": number;
        /**
          * redirect click event to parent
         */
        "handleClick": Function;
        /**
          * {x, y} coordinates
         */
        "position": object;
        /**
          * show borders
         */
        "showGrid": boolean;
    }
    interface MvjpColorChooser {
        /**
          * choosen colorcode
         */
        "choosenColour": number;
        /**
          * setter for colorcode
         */
        "updateColor": Function;
    }
    interface MvjpColorChooserField {
        /**
          * handle click
         */
        "clickTile": Function;
        /**
          * choosen colorcode
         */
        "color": string;
        /**
          * choosen field
         */
        "isActive": boolean;
    }
    interface MvjpCpPanel {
        /**
          * Paste Action
         */
        "pasteMatrix": Function;
        /**
          * Set ID of actual matrix to copy
         */
        "setCopyIndex": Function;
    }
    interface MvjpExportButton {
        /**
          * display modal toggle event
         */
        "setIsModalOpen": Function;
    }
    interface MvjpExportCheckboxField {
        /**
          * the selected field of the matrix
         */
        "field": number[][];
        /**
          * state of the checkbox
         */
        "isActive": boolean;
        /**
          * position of the checkbox in the sprite tile viewer
         */
        "position": number;
        /**
          * event to select this specific checkbox
         */
        "setSelectedTile": Function;
    }
    interface MvjpExportCodeOutput {
        /**
          * matrix to export
         */
        "fields": number[][][];
        /**
          * navigate through overlay
         */
        "navigateTo": Function;
    }
    interface MvjpExportFieldSelector {
        /**
          * handle choosing checkbox event
         */
        "handleTileClick": Function;
        /**
          * the drawn matrix
         */
        "matrix": number[][][];
        /**
          * navigate trough the overlay
         */
        "navigateTo": Function;
        /**
          * selected checkboxes
         */
        "selectedFields": number[];
    }
    interface MvjpExportModalContent {
        /**
          * the painted matrix
         */
        "matrix": number[][][];
    }
    interface MvjpModal {
        /**
          * is modal open state
         */
        "isModalOpen": boolean;
        /**
          * display modal toggle event
         */
        "setIsModalOpen": Function;
    }
    interface MvjpPaintModusSwitcher {
        /**
          * setter of paintmodus
         */
        "setPaintModus": Function;
    }
    interface MvjpPositionSetting {
        /**
          * chosen matrix tile
         */
        "indexTileMatrix": number;
        /**
          * global matrix
         */
        "matrix": number[][][];
        /**
          * set matrix
         */
        "setMatrix": Function;
        /**
          * application settings
         */
        "settings": Settings;
    }
    interface MvjpPreview {
        /**
          * chosen matrix tile
         */
        "indexTileMatrix": number;
        /**
          * global matrix
         */
        "matrix": number[][][];
        /**
          * which format
         */
        "size": string;
        /**
          * usage without a list
         */
        "standalone": boolean;
    }
    interface MvjpPreviewWall {
    }
    interface MvjpSettingsUi {
        /**
          * setter for global settings
         */
        "setSettings": Function;
        /**
          * global settings
         */
        "settings": Settings;
    }
    interface MvjpSpriteNumberSwitcher {
        /**
          * global matrix setter
         */
        "changeTileMatrix": Function;
        /**
          * which sprite tile is active
         */
        "indexTileMatrix": number;
        /**
          * global settings
         */
        "settings": Settings;
        /**
          * set global sprite tile
         */
        "updateSprite": Function;
    }
    interface MvjpSpriteNumberSwitcherTile {
        /**
          * handle click event
         */
        "clickTile": Function;
        /**
          * index of tile in array
         */
        "index": number;
        /**
          * active state
         */
        "isActive": boolean;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLMvjpCanvasMatrixElement extends Components.MvjpCanvasMatrix, HTMLStencilElement {
    }
    var HTMLMvjpCanvasMatrixElement: {
        prototype: HTMLMvjpCanvasMatrixElement;
        new (): HTMLMvjpCanvasMatrixElement;
    };
    interface HTMLMvjpCanvasMatrixTileElement extends Components.MvjpCanvasMatrixTile, HTMLStencilElement {
    }
    var HTMLMvjpCanvasMatrixTileElement: {
        prototype: HTMLMvjpCanvasMatrixTileElement;
        new (): HTMLMvjpCanvasMatrixTileElement;
    };
    interface HTMLMvjpColorChooserElement extends Components.MvjpColorChooser, HTMLStencilElement {
    }
    var HTMLMvjpColorChooserElement: {
        prototype: HTMLMvjpColorChooserElement;
        new (): HTMLMvjpColorChooserElement;
    };
    interface HTMLMvjpColorChooserFieldElement extends Components.MvjpColorChooserField, HTMLStencilElement {
    }
    var HTMLMvjpColorChooserFieldElement: {
        prototype: HTMLMvjpColorChooserFieldElement;
        new (): HTMLMvjpColorChooserFieldElement;
    };
    interface HTMLMvjpCpPanelElement extends Components.MvjpCpPanel, HTMLStencilElement {
    }
    var HTMLMvjpCpPanelElement: {
        prototype: HTMLMvjpCpPanelElement;
        new (): HTMLMvjpCpPanelElement;
    };
    interface HTMLMvjpExportButtonElement extends Components.MvjpExportButton, HTMLStencilElement {
    }
    var HTMLMvjpExportButtonElement: {
        prototype: HTMLMvjpExportButtonElement;
        new (): HTMLMvjpExportButtonElement;
    };
    interface HTMLMvjpExportCheckboxFieldElement extends Components.MvjpExportCheckboxField, HTMLStencilElement {
    }
    var HTMLMvjpExportCheckboxFieldElement: {
        prototype: HTMLMvjpExportCheckboxFieldElement;
        new (): HTMLMvjpExportCheckboxFieldElement;
    };
    interface HTMLMvjpExportCodeOutputElement extends Components.MvjpExportCodeOutput, HTMLStencilElement {
    }
    var HTMLMvjpExportCodeOutputElement: {
        prototype: HTMLMvjpExportCodeOutputElement;
        new (): HTMLMvjpExportCodeOutputElement;
    };
    interface HTMLMvjpExportFieldSelectorElement extends Components.MvjpExportFieldSelector, HTMLStencilElement {
    }
    var HTMLMvjpExportFieldSelectorElement: {
        prototype: HTMLMvjpExportFieldSelectorElement;
        new (): HTMLMvjpExportFieldSelectorElement;
    };
    interface HTMLMvjpExportModalContentElement extends Components.MvjpExportModalContent, HTMLStencilElement {
    }
    var HTMLMvjpExportModalContentElement: {
        prototype: HTMLMvjpExportModalContentElement;
        new (): HTMLMvjpExportModalContentElement;
    };
    interface HTMLMvjpModalElement extends Components.MvjpModal, HTMLStencilElement {
    }
    var HTMLMvjpModalElement: {
        prototype: HTMLMvjpModalElement;
        new (): HTMLMvjpModalElement;
    };
    interface HTMLMvjpPaintModusSwitcherElement extends Components.MvjpPaintModusSwitcher, HTMLStencilElement {
    }
    var HTMLMvjpPaintModusSwitcherElement: {
        prototype: HTMLMvjpPaintModusSwitcherElement;
        new (): HTMLMvjpPaintModusSwitcherElement;
    };
    interface HTMLMvjpPositionSettingElement extends Components.MvjpPositionSetting, HTMLStencilElement {
    }
    var HTMLMvjpPositionSettingElement: {
        prototype: HTMLMvjpPositionSettingElement;
        new (): HTMLMvjpPositionSettingElement;
    };
    interface HTMLMvjpPreviewElement extends Components.MvjpPreview, HTMLStencilElement {
    }
    var HTMLMvjpPreviewElement: {
        prototype: HTMLMvjpPreviewElement;
        new (): HTMLMvjpPreviewElement;
    };
    interface HTMLMvjpPreviewWallElement extends Components.MvjpPreviewWall, HTMLStencilElement {
    }
    var HTMLMvjpPreviewWallElement: {
        prototype: HTMLMvjpPreviewWallElement;
        new (): HTMLMvjpPreviewWallElement;
    };
    interface HTMLMvjpSettingsUiElement extends Components.MvjpSettingsUi, HTMLStencilElement {
    }
    var HTMLMvjpSettingsUiElement: {
        prototype: HTMLMvjpSettingsUiElement;
        new (): HTMLMvjpSettingsUiElement;
    };
    interface HTMLMvjpSpriteNumberSwitcherElement extends Components.MvjpSpriteNumberSwitcher, HTMLStencilElement {
    }
    var HTMLMvjpSpriteNumberSwitcherElement: {
        prototype: HTMLMvjpSpriteNumberSwitcherElement;
        new (): HTMLMvjpSpriteNumberSwitcherElement;
    };
    interface HTMLMvjpSpriteNumberSwitcherTileElement extends Components.MvjpSpriteNumberSwitcherTile, HTMLStencilElement {
    }
    var HTMLMvjpSpriteNumberSwitcherTileElement: {
        prototype: HTMLMvjpSpriteNumberSwitcherTileElement;
        new (): HTMLMvjpSpriteNumberSwitcherTileElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "mvjp-canvas-matrix": HTMLMvjpCanvasMatrixElement;
        "mvjp-canvas-matrix-tile": HTMLMvjpCanvasMatrixTileElement;
        "mvjp-color-chooser": HTMLMvjpColorChooserElement;
        "mvjp-color-chooser-field": HTMLMvjpColorChooserFieldElement;
        "mvjp-cp-panel": HTMLMvjpCpPanelElement;
        "mvjp-export-button": HTMLMvjpExportButtonElement;
        "mvjp-export-checkbox-field": HTMLMvjpExportCheckboxFieldElement;
        "mvjp-export-code-output": HTMLMvjpExportCodeOutputElement;
        "mvjp-export-field-selector": HTMLMvjpExportFieldSelectorElement;
        "mvjp-export-modal-content": HTMLMvjpExportModalContentElement;
        "mvjp-modal": HTMLMvjpModalElement;
        "mvjp-paint-modus-switcher": HTMLMvjpPaintModusSwitcherElement;
        "mvjp-position-setting": HTMLMvjpPositionSettingElement;
        "mvjp-preview": HTMLMvjpPreviewElement;
        "mvjp-preview-wall": HTMLMvjpPreviewWallElement;
        "mvjp-settings-ui": HTMLMvjpSettingsUiElement;
        "mvjp-sprite-number-switcher": HTMLMvjpSpriteNumberSwitcherElement;
        "mvjp-sprite-number-switcher-tile": HTMLMvjpSpriteNumberSwitcherTileElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface MvjpCanvasMatrix {
        /**
          * choosen colorcode
         */
        "choosenColour"?: number;
        /**
          * active sprite tile
         */
        "indexTileMatrix"?: number;
        /**
          * state of the entire matrix
         */
        "matrix"?: number[][][];
        /**
          * brush or bucket
         */
        "paintModus"?: PaintModus;
        /**
          * set matrix
         */
        "setMatrix"?: Function;
        /**
          * application settings
         */
        "settings"?: Settings;
    }
    interface MvjpCanvasMatrixTile {
        /**
          * color code of this tile
         */
        "colour"?: number;
        /**
          * redirect click event to parent
         */
        "handleClick"?: Function;
        /**
          * {x, y} coordinates
         */
        "position"?: object;
        /**
          * show borders
         */
        "showGrid"?: boolean;
    }
    interface MvjpColorChooser {
        /**
          * choosen colorcode
         */
        "choosenColour"?: number;
        /**
          * setter for colorcode
         */
        "updateColor"?: Function;
    }
    interface MvjpColorChooserField {
        /**
          * handle click
         */
        "clickTile"?: Function;
        /**
          * choosen colorcode
         */
        "color"?: string;
        /**
          * choosen field
         */
        "isActive"?: boolean;
    }
    interface MvjpCpPanel {
        /**
          * Paste Action
         */
        "pasteMatrix"?: Function;
        /**
          * Set ID of actual matrix to copy
         */
        "setCopyIndex"?: Function;
    }
    interface MvjpExportButton {
        /**
          * display modal toggle event
         */
        "setIsModalOpen"?: Function;
    }
    interface MvjpExportCheckboxField {
        /**
          * the selected field of the matrix
         */
        "field"?: number[][];
        /**
          * state of the checkbox
         */
        "isActive"?: boolean;
        /**
          * position of the checkbox in the sprite tile viewer
         */
        "position"?: number;
        /**
          * event to select this specific checkbox
         */
        "setSelectedTile"?: Function;
    }
    interface MvjpExportCodeOutput {
        /**
          * matrix to export
         */
        "fields"?: number[][][];
        /**
          * navigate through overlay
         */
        "navigateTo"?: Function;
    }
    interface MvjpExportFieldSelector {
        /**
          * handle choosing checkbox event
         */
        "handleTileClick"?: Function;
        /**
          * the drawn matrix
         */
        "matrix"?: number[][][];
        /**
          * navigate trough the overlay
         */
        "navigateTo"?: Function;
        /**
          * selected checkboxes
         */
        "selectedFields"?: number[];
    }
    interface MvjpExportModalContent {
        /**
          * the painted matrix
         */
        "matrix"?: number[][][];
    }
    interface MvjpModal {
        /**
          * is modal open state
         */
        "isModalOpen"?: boolean;
        /**
          * display modal toggle event
         */
        "setIsModalOpen"?: Function;
    }
    interface MvjpPaintModusSwitcher {
        /**
          * setter of paintmodus
         */
        "setPaintModus"?: Function;
    }
    interface MvjpPositionSetting {
        /**
          * chosen matrix tile
         */
        "indexTileMatrix"?: number;
        /**
          * global matrix
         */
        "matrix"?: number[][][];
        /**
          * set matrix
         */
        "setMatrix"?: Function;
        /**
          * application settings
         */
        "settings"?: Settings;
    }
    interface MvjpPreview {
        /**
          * chosen matrix tile
         */
        "indexTileMatrix"?: number;
        /**
          * global matrix
         */
        "matrix"?: number[][][];
        /**
          * which format
         */
        "size"?: string;
        /**
          * usage without a list
         */
        "standalone"?: boolean;
    }
    interface MvjpPreviewWall {
    }
    interface MvjpSettingsUi {
        /**
          * setter for global settings
         */
        "setSettings"?: Function;
        /**
          * global settings
         */
        "settings"?: Settings;
    }
    interface MvjpSpriteNumberSwitcher {
        /**
          * global matrix setter
         */
        "changeTileMatrix"?: Function;
        /**
          * which sprite tile is active
         */
        "indexTileMatrix"?: number;
        /**
          * global settings
         */
        "settings"?: Settings;
        /**
          * set global sprite tile
         */
        "updateSprite"?: Function;
    }
    interface MvjpSpriteNumberSwitcherTile {
        /**
          * handle click event
         */
        "clickTile"?: Function;
        /**
          * index of tile in array
         */
        "index"?: number;
        /**
          * active state
         */
        "isActive"?: boolean;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "mvjp-canvas-matrix": MvjpCanvasMatrix;
        "mvjp-canvas-matrix-tile": MvjpCanvasMatrixTile;
        "mvjp-color-chooser": MvjpColorChooser;
        "mvjp-color-chooser-field": MvjpColorChooserField;
        "mvjp-cp-panel": MvjpCpPanel;
        "mvjp-export-button": MvjpExportButton;
        "mvjp-export-checkbox-field": MvjpExportCheckboxField;
        "mvjp-export-code-output": MvjpExportCodeOutput;
        "mvjp-export-field-selector": MvjpExportFieldSelector;
        "mvjp-export-modal-content": MvjpExportModalContent;
        "mvjp-modal": MvjpModal;
        "mvjp-paint-modus-switcher": MvjpPaintModusSwitcher;
        "mvjp-position-setting": MvjpPositionSetting;
        "mvjp-preview": MvjpPreview;
        "mvjp-preview-wall": MvjpPreviewWall;
        "mvjp-settings-ui": MvjpSettingsUi;
        "mvjp-sprite-number-switcher": MvjpSpriteNumberSwitcher;
        "mvjp-sprite-number-switcher-tile": MvjpSpriteNumberSwitcherTile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "mvjp-canvas-matrix": LocalJSX.MvjpCanvasMatrix & JSXBase.HTMLAttributes<HTMLMvjpCanvasMatrixElement>;
            "mvjp-canvas-matrix-tile": LocalJSX.MvjpCanvasMatrixTile & JSXBase.HTMLAttributes<HTMLMvjpCanvasMatrixTileElement>;
            "mvjp-color-chooser": LocalJSX.MvjpColorChooser & JSXBase.HTMLAttributes<HTMLMvjpColorChooserElement>;
            "mvjp-color-chooser-field": LocalJSX.MvjpColorChooserField & JSXBase.HTMLAttributes<HTMLMvjpColorChooserFieldElement>;
            "mvjp-cp-panel": LocalJSX.MvjpCpPanel & JSXBase.HTMLAttributes<HTMLMvjpCpPanelElement>;
            "mvjp-export-button": LocalJSX.MvjpExportButton & JSXBase.HTMLAttributes<HTMLMvjpExportButtonElement>;
            "mvjp-export-checkbox-field": LocalJSX.MvjpExportCheckboxField & JSXBase.HTMLAttributes<HTMLMvjpExportCheckboxFieldElement>;
            "mvjp-export-code-output": LocalJSX.MvjpExportCodeOutput & JSXBase.HTMLAttributes<HTMLMvjpExportCodeOutputElement>;
            "mvjp-export-field-selector": LocalJSX.MvjpExportFieldSelector & JSXBase.HTMLAttributes<HTMLMvjpExportFieldSelectorElement>;
            "mvjp-export-modal-content": LocalJSX.MvjpExportModalContent & JSXBase.HTMLAttributes<HTMLMvjpExportModalContentElement>;
            "mvjp-modal": LocalJSX.MvjpModal & JSXBase.HTMLAttributes<HTMLMvjpModalElement>;
            "mvjp-paint-modus-switcher": LocalJSX.MvjpPaintModusSwitcher & JSXBase.HTMLAttributes<HTMLMvjpPaintModusSwitcherElement>;
            "mvjp-position-setting": LocalJSX.MvjpPositionSetting & JSXBase.HTMLAttributes<HTMLMvjpPositionSettingElement>;
            "mvjp-preview": LocalJSX.MvjpPreview & JSXBase.HTMLAttributes<HTMLMvjpPreviewElement>;
            "mvjp-preview-wall": LocalJSX.MvjpPreviewWall & JSXBase.HTMLAttributes<HTMLMvjpPreviewWallElement>;
            "mvjp-settings-ui": LocalJSX.MvjpSettingsUi & JSXBase.HTMLAttributes<HTMLMvjpSettingsUiElement>;
            "mvjp-sprite-number-switcher": LocalJSX.MvjpSpriteNumberSwitcher & JSXBase.HTMLAttributes<HTMLMvjpSpriteNumberSwitcherElement>;
            "mvjp-sprite-number-switcher-tile": LocalJSX.MvjpSpriteNumberSwitcherTile & JSXBase.HTMLAttributes<HTMLMvjpSpriteNumberSwitcherTileElement>;
        }
    }
}
