import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ExportFieldSelector } from './export-field-selector';

describe('mvjp-export-field-selector', () => {
    it('builds', () => {
        expect(new ExportFieldSelector()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const matrix = [
            [
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0, 0, 0, 0],
                [2, 2, 2, 0, 0, 0, 0, 0],
            ],
        ];
        const page = await newSpecPage({
            components: [ExportFieldSelector],
            template: () => {
                return (
                    <mvjp-export-field-selector
                        navigateTo={() => {}}
                        handleTileClick={() => {}}
                        selectedFields={[0]}
                        matrix={matrix}
                    />
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should test navigate to', async () => {
        const navigateTo = jest.fn();

        const page = await newSpecPage({
            components: [ExportFieldSelector],
            template: () => {
                return (
                    <mvjp-export-field-selector
                        navigateTo={navigateTo}
                        handleTileClick={() => {}}
                        selectedFields={[0]}
                        matrix={[]}
                    />
                );
            },
        });

        page.root.querySelector('button').click();
        await page.waitForChanges();
        expect(navigateTo).toBeCalled();
    });

    it('should not navigate to', async () => {
        const navigateTo = jest.fn();

        const page = await newSpecPage({
            components: [ExportFieldSelector],
            template: () => {
                return (
                    <mvjp-export-field-selector
                        navigateTo={navigateTo}
                        handleTileClick={() => {}}
                        matrix={[]}
                        selectedFields={[]}
                    />
                );
            },
        });

        page.root.querySelector('button').click();
        await page.waitForChanges();
        expect(navigateTo).not.toBeCalled();
    });
});
