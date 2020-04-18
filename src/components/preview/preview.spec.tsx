import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { Preview } from './preview';

describe('mvjp-preview', () => {
    it('builds', () => {
        expect(new Preview()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        let matrix: number[][][] = [];
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

        const page = await newSpecPage({
            components: [Preview],
            template: () => {
                return (
                    <div>
                        <mvjp-preview size="s" matrix={matrix} indexTileMatrix={0} />

                        <mvjp-preview size="l" matrix={matrix} indexTileMatrix={0} />
                    </div>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });
});
