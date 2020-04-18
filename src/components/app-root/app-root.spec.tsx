import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { AppRoot } from './app-root';

describe('app-root', () => {
    it('builds', () => {
        expect(new AppRoot()).toBeTruthy();
    });
    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [AppRoot],
            template: () => <app-root />,
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should update choosenColour', async () => {
        const rootApp = new AppRoot();
        rootApp.updateColor(23);
        expect(rootApp.choosenColour).toBe(23);
    });

    it('should update matrix', async () => {
        const rootApp = new AppRoot();
        rootApp.setMatrix([]);
        expect(rootApp.matrix).toEqual([]);
    });

    it('should update modal', async () => {
        const rootApp = new AppRoot();
        rootApp.setIsModalOpen(true);
        expect(rootApp.isModalOpen).toBe(true);
    });

    it('should update copyIndex and tilematrix', async () => {
        const rootApp = new AppRoot();
        rootApp.changeTileMatrix(23);
        rootApp.setCopyIndex();
        expect(rootApp.copyIndex).toBe(23);
        expect(rootApp.indexTileMatrix).toBe(23);
    });

    it('should update settings', async () => {
        const rootApp = new AppRoot();
        rootApp.setSettings({
            fieldHeight: 100,
            fieldWidth: 200,
            spriteAmount: 23,
            isGridVisible: false,
            isFieldNumberVisible: false,
        });
        expect(rootApp.settings).toEqual({
            fieldHeight: 100,
            fieldWidth: 200,
            isFieldNumberVisible: false,
            isGridVisible: false,
            spriteAmount: 23,
        });
    });

    it('should update paintModus', async () => {
        const rootApp = new AppRoot();
        rootApp.setPaintModus(1);
        expect(rootApp.paintModus).toBe(1);
    });

    it('should pasteMatrix', async () => {
        const rootApp = new AppRoot();
        rootApp.matrix = rootApp.createMatrixField(2, 8, 8);
        rootApp.matrix[0] = [
            [1, 1, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];

        rootApp.changeTileMatrix(0);
        rootApp.setCopyIndex();

        rootApp.changeTileMatrix(1);
        rootApp.pasteMatrix(1);
        expect(rootApp.matrix).toEqual([
            [
                [1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 1],
                [0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 0],
                [0, 1, 1, 0, 1, 0, 0, 0],
                [1, 0, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
                [1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 1],
                [0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 0],
                [0, 1, 1, 0, 1, 0, 0, 0],
                [1, 0, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ],
        ]);
    });
});
