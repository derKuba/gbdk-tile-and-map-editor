import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ExportCodeOutput } from './export-code-output';

const selectedField = [
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
    [
        [0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 2, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 2, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
];

describe('mvjp-export-code-output', () => {
    it('builds', () => {
        expect(new ExportCodeOutput()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [ExportCodeOutput],
            template: () => {
                return <mvjp-export-code-output navigateTo={() => {}} fields={selectedField} />;
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should test navigate to', async () => {
        const navigateTo = jest.fn();

        const page = await newSpecPage({
            components: [ExportCodeOutput],
            template: () => {
                return <mvjp-export-code-output navigateTo={navigateTo} fields={selectedField} />;
            },
        });

        page.root.querySelector('button.secondary').click();
        await page.waitForChanges();
        expect(navigateTo).toBeCalled();
    });

    it('should test navigate to', async () => {
        const createURLMock = jest.fn();
        global.Blob = function Blob() {};
        global.window = {
            URL: {
                createObjectURL: createURLMock,
            },
        };

        const page = await newSpecPage({
            components: [ExportCodeOutput],
            template: () => {
                return <mvjp-export-code-output navigateTo={() => {}} fields={selectedField} />;
            },
        });

        page.root.querySelector('button.primary').click();
        await page.waitForChanges();
        expect(createURLMock).toBeCalled();
    });
});
