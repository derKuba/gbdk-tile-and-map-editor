import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { CanvasMatrixTile } from './canvas-matrix-tile';

describe('mvjp-color-chooser', () => {
    it('builds', () => {
        expect(new CanvasMatrixTile()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const position = { x: 0, y: 0 };
        const onClick = () => {};
        const colourCode = 0;

        const page = await newSpecPage({
            components: [CanvasMatrixTile],
            template: () => {
                return (
                    <div>
                        <mvjp-canvas-matrix-tile
                            position={position}
                            handleClick={onClick}
                            colour={colourCode}
                            showGrid={true}>
                            here a children
                        </mvjp-canvas-matrix-tile>
                        <mvjp-canvas-matrix-tile
                            position={position}
                            handleClick={onClick}
                            colour={colourCode}
                            showGrid={false}>
                            here a children
                        </mvjp-canvas-matrix-tile>
                    </div>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('handle click event', async () => {
        const position = { x: 0, y: 0 };
        const onClick = jest.fn();
        const colourCode = 0;

        const page = await newSpecPage({
            components: [CanvasMatrixTile],
            template: () => {
                return (
                    <mvjp-canvas-matrix-tile
                        position={position}
                        handleClick={onClick}
                        colour={colourCode}
                        showGrid={true}>
                        here a children
                    </mvjp-canvas-matrix-tile>
                );
            },
        });

        let button = page.root.querySelector('.canvas-matrix-tile');
        button.click();
        await page.waitForChanges();

        expect(onClick).toBeCalledWith({ x: 0, y: 0 });
    });
});
