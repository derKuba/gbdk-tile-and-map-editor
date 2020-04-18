import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ExportModalContent } from './export-modal-content';

describe('mvjp-export-modal-content', () => {
    it('builds', () => {
        expect(new ExportModalContent()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [ExportModalContent],
            template: () => {
                return <mvjp-export-modal-content />;
            },
        });

        expect(page.root).toMatchSnapshot();

        page.rootInstance.setIndex(1);

        await page.waitForChanges();

        expect(page.root).toMatchSnapshot();
    });

    it('should handle tile click', async () => {
        const modalContent = new ExportModalContent();
        modalContent.selectedFields = [0, 1, undefined];
        modalContent.matrix = [
            [
                [
                    [0, 1, 2],
                    [0, 1, 2],
                    [0, 1, 2],
                ],
                [
                    [0, 1, 2],
                    [0, 1, 2],
                    [0, 1, 2],
                ],
                [
                    [0, 1, 2],
                    [0, 1, 2],
                    [0, 1, 2],
                ],
            ],
        ];

        modalContent.handleTileClick(2);

        expect(modalContent.selectedFields).toEqual([0, 1, 2]);

        modalContent.handleTileClick(1);
        expect(modalContent.selectedFields).toEqual([0, undefined, 2]);
    });
});
