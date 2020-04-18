import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { CanvasMatrix } from './canvas-matrix';

describe('mvjp-canvas-matrix', () => {
    let matrix: number[][][] = [];
    beforeEach(() => {
        for (let i = 0; i < 12; i++) {
            matrix.push(Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 0)));
        }

        matrix[0] = [
            [1, 1, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
    });

    it('builds', () => {
        expect(new CanvasMatrix()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const choosenColour = 1;
        const indexTileMatrix = 0;

        const settings = {
            fieldWidth: 8,
            fieldHeight: 8,
            spriteAmount: 12,
            isGridVisible: true,
            isFieldNumberVisible: true,
        };

        const page = await newSpecPage({
            components: [CanvasMatrix],
            template: () => {
                return (
                    <mvjp-canvas-matrix
                        choosenColour={choosenColour}
                        matrix={matrix}
                        settings={settings}
                        paintModus={0}
                        indexTileMatrix={indexTileMatrix}
                        setMatrix={() => {}}></mvjp-canvas-matrix>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should change color in matrix', () => {
        const canvasMatrix = new CanvasMatrix();
        canvasMatrix.setMatrix = () => {};
        canvasMatrix.matrix = matrix;
        canvasMatrix.choosenColour = 2;
        canvasMatrix.indexTileMatrix = 0;
        canvasMatrix.paintModus = 0;

        canvasMatrix.clickMatrixTile({ x: 0, y: 0 });
        expect(canvasMatrix.matrix[0][0][0]).toBe(2);
    });

    it('should change mousemoving', () => {
        const canvasMatrix = new CanvasMatrix();
        canvasMatrix.setMatrix = () => {};
        canvasMatrix.matrix = matrix;
        canvasMatrix.choosenColour = 2;
        canvasMatrix.indexTileMatrix = 0;
        canvasMatrix.paintModus = 0;

        canvasMatrix.clickMatrixTile = jest.fn();
        canvasMatrix.mouseUp();

        const event = {
            target: {
                dataset: { pos: '{"y":1,"x":6}' },
            },
        };
        canvasMatrix.mouseMove(event);
        expect(canvasMatrix.clickMatrixTile).not.toBeCalled();

        canvasMatrix.mouseDown();
        canvasMatrix.mouseMove(event);
        expect(canvasMatrix.clickMatrixTile).toBeCalledWith({ x: 6, y: 1 });
    });

    it('should throw json parse error', () => {
        const canvasMatrix = new CanvasMatrix();
        canvasMatrix.setMatrix = () => {};
        canvasMatrix.matrix = matrix;
        canvasMatrix.choosenColour = 2;
        canvasMatrix.indexTileMatrix = 0;
        canvasMatrix.paintModus = 0;

        canvasMatrix.clickMatrixTile = jest.fn();
        canvasMatrix.mouseDown();

        const event = {
            target: {
                dataset: { pos: '{ y: 1, x: 6 }' },
            },
        };
        canvasMatrix.mouseMove(event);
        expect(canvasMatrix.clickMatrixTile).not.toBeCalled();
    });

    it('should change color in matrix', () => {
        const canvasMatrix = new CanvasMatrix();
        canvasMatrix.setMatrix = () => {};
        canvasMatrix.matrix = matrix;
        canvasMatrix.choosenColour = 2;
        canvasMatrix.indexTileMatrix = 0;
        canvasMatrix.paintModus = 1;

        canvasMatrix.clickMatrixTile({ x: 0, y: 0 });
        expect(canvasMatrix.matrix[0]).toEqual([
            [2, 2, 2, 0, 1, 1, 1, 0],
            [0, 0, 2, 0, 1, 0, 0, 1],
            [0, 0, 2, 0, 1, 1, 1, 0],
            [0, 0, 2, 0, 1, 0, 0, 0],
            [0, 2, 2, 0, 1, 0, 0, 0],
            [1, 0, 2, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]);

        canvasMatrix.clickMatrixTile({ x: 0, y: 0 });
    });
});
