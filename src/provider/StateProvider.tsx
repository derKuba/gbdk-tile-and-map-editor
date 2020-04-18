import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

import { Settings } from '../models/settingsModel';
import { PaintModus } from '../models/paintModus';

export interface State {
    matrix: number[][][];
    setMatrix: Function;
    choosenColour: number;
    updateColor: Function;
    indexTileMatrix: number;
    changeTileMatrix: Function;
    settings: Settings;
    setSettings: Function;
    paintModus: PaintModus;
    setPaintModus: Function;
    isModalOpen: boolean;
    setIsModalOpen: Function;
    setCopyIndex: Function;
    pasteMatrix: Function;
    copyIndex: number;
}

export default createProviderConsumer<State>( // eslint-disable-line @stencil/ban-side-effects
    {
        matrix: [[[]]],
        setMatrix: () => {},
        choosenColour: 0,
        indexTileMatrix: 0,

        updateColor: () => {},
        changeTileMatrix: () => {},
        settings: {
            fieldWidth: 8,
            fieldHeight: 8,
            spriteAmount: 12,
            isGridVisible: true,
            isFieldNumberVisible: true,
        },
        setSettings: () => {},
        paintModus: PaintModus.BRUSH,
        setPaintModus: () => {},
        isModalOpen: false,
        setIsModalOpen: () => {},
        pasteMatrix: () => {},
        setCopyIndex: () => {},
        copyIndex: 0,
    },
    (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />
);
