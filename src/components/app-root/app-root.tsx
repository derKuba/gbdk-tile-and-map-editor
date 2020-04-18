/* eslint-disable max-lines, max-lines-per-function */

import { Component, h, State } from '@stencil/core';

import { Settings } from '../../models/settingsModel';
import { PaintModus } from '../../models/paintModus';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css',
    shadow: true,
})
export class AppRoot {
    @State() indexTileMatrix: number = 0;
    @State() matrix: number[][][] = [];
    @State() choosenColour: number = 2;
    @State() isModalOpen: boolean = false;
    @State() copyIndex: number = 0;
    @State() paintModus: PaintModus = PaintModus.BRUSH;

    @State() settings: Settings = {
        fieldHeight: 8,
        fieldWidth: 8,
        spriteAmount: 12,
        isGridVisible: true,
        isFieldNumberVisible: false,
    };

    private updateColor = color => {
        this.choosenColour = color;
    };

    private changeTileMatrix = index => {
        this.indexTileMatrix = index;
    };

    private setSettings = ({ fieldHeight, fieldWidth, spriteAmount, isGridVisible, isFieldNumberVisible }) => {
        this.settings = {
            fieldHeight,
            fieldWidth,
            spriteAmount,
            isGridVisible,
            isFieldNumberVisible,
        };
        this.matrix = this.createMatrixField(spriteAmount, fieldHeight, fieldWidth);
    };

    private setMatrix = matrix => {
        this.matrix = matrix;
    };

    private setPaintModus = modus => {
        this.paintModus = modus;
    };

    private createMatrixField = (spriteAmount, fieldHeight, fieldWidth) => {
        const matrix: number[][][] = [];
        for (let i = 0; i < spriteAmount; i++) {
            matrix.push(Array.from({ length: fieldHeight }, () => Array.from({ length: fieldWidth }, () => 0)));
        }

        return matrix;
    };

    private setIsModalOpen = modalState => {
        this.isModalOpen = modalState;
    };

    private pasteMatrix = () => {
        this.matrix[this.indexTileMatrix] = this.matrix[this.copyIndex];
        this.matrix = [...this.matrix];
    };

    private setCopyIndex = () => {
        this.copyIndex = this.indexTileMatrix;
    };

    componentWillLoad() {
        const { spriteAmount, fieldHeight, fieldWidth } = this.settings;
        this.matrix = this.createMatrixField(spriteAmount, fieldHeight, fieldWidth);

        /*
                this.matrix[0] = [
                    [1, 1, 1, 0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 1, 0, 0, 1],
                    [0, 0, 1, 0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 1, 0, 0, 0],
                    [0, 1, 1, 0, 1, 0, 0, 0],
                    [1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 1, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                ];*/
    }

    render() {
        const tunnelState = {
            matrix: this.matrix,
            indexTileMatrix: this.indexTileMatrix,
            choosenColour: this.choosenColour,
            updateColor: this.updateColor,
            changeTileMatrix: this.changeTileMatrix,
            setSettings: this.setSettings,
            settings: this.settings,
            setMatrix: this.setMatrix,
            paintModus: this.paintModus,
            setPaintModus: this.setPaintModus,
            isModalOpen: this.isModalOpen,
            setIsModalOpen: this.setIsModalOpen,
            copyIndex: this.copyIndex,
            setCopyIndex: this.setCopyIndex,
            pasteMatrix: this.pasteMatrix,
        };

        return (
            <div>
                <header class="gb-purple">
                    <h1>GB Sprite Tile Creator</h1>
                </header>

                <main>
                    <Tunnel.Provider state={tunnelState}>
                        <stencil-router>
                            <stencil-route-switch scrollTopOffset={0}>
                                <stencil-route url="/" component="app-home" exact={true} />
                                <stencil-route url="/docs" component="app-home" />
                                <stencil-route url="/profile/:name" component="app-profile" />
                            </stencil-route-switch>
                        </stencil-router>
                    </Tunnel.Provider>
                </main>

                <div class="disclaimer">
                    Icons made by{' '}
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                        Freepik
                    </a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        {' '}
                        www.flaticon.com
                    </a>
                </div>
            </div>
        );
    }
}
