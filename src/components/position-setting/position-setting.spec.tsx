import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { PositionSetting } from './position-setting';

describe('mvjp-position-setting', () => {
    let page;
    beforeEach(async () => {
        const matrix = [];
        matrix[0] = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        page = await newSpecPage({
            components: [PositionSetting],
            template: () => {
                return (
                    <mvjp-position-setting
                        matrix={matrix}
                        indexTileMatrix={0}
                        setMatrix={() => {}}
                        settings={{
                            fieldWidth: 8,
                            fieldHeight: 8,
                        }}
                    />
                );
            },
        });
    });
    it('builds', () => {
        expect(new PositionSetting()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        expect(page.root).toMatchSnapshot();
    });

    it('should move up', async () => {
        page.root.shadowRoot.querySelectorAll('img')[1].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [4, 5, 6],
            [7, 8, 9],
            [1, 2, 3],
        ]);
    });

    it('should move down', async () => {
        page.root.shadowRoot.querySelectorAll('img')[6].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [7, 8, 9],
            [1, 2, 3],
            [4, 5, 6],
        ]);
    });

    it('should move left ', async () => {
        page.root.shadowRoot.querySelectorAll('img')[3].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [2, 3, 1],
            [5, 6, 4],
            [8, 9, 7],
        ]);
    });

    it('should move right ', async () => {
        page.root.shadowRoot.querySelectorAll('img')[4].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [3, 1, 2],
            [6, 4, 5],
            [9, 7, 8],
        ]);
    });

    it('should clear field ', async () => {
        page.root.shadowRoot.querySelectorAll('img')[7].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]);
    });

    it('should rotate counter clockwise field ', async () => {
        page.root.shadowRoot.querySelectorAll('img')[5].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [3, 6, 9],
            [2, 5, 8],
            [1, 4, 7],
        ]);
    });

    it('should flip horizontally ', async () => {
        page.root.shadowRoot.querySelectorAll('img')[0].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [7, 8, 9],
            [4, 5, 6],
            [1, 2, 3],
        ]);
    });

    it('should flip vertically ', async () => {
        page.root.shadowRoot.querySelectorAll('img')[2].click();
        await page.waitForChanges();
        expect(page.rootInstance.matrix[0]).toEqual([
            [3, 2, 1],
            [6, 5, 4],
            [9, 8, 7],
        ]);
    });
});
