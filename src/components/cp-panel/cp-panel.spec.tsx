import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { CpPanel } from './cp-panel';

describe('mvjp-cp-panel', () => {
    it('builds', () => {
        expect(new CpPanel()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [CpPanel],
            template: () => {
                return <mvjp-cp-panel />;
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should test clickhandler', async () => {
        const pasteMatrix = jest.fn();
        const setCopyIndex = jest.fn();

        const page = await newSpecPage({
            components: [CpPanel],
            template: () => {
                return <mvjp-cp-panel setCopyIndex={setCopyIndex} pasteMatrix={pasteMatrix}></mvjp-cp-panel>;
            },
        });

        page.root.shadowRoot.querySelector('img[title="Copy Matrix"]').click();
        await page.waitForChanges();
        expect(setCopyIndex).toBeCalled();

        page.root.shadowRoot.querySelector('img[title="Paste"]').click();
        await page.waitForChanges();
        expect(pasteMatrix).toBeCalled();
    });
});
