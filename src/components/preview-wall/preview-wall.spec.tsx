import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { PreviewWall } from './preview-wall';

describe('mvjp-preview-wall', () => {
    it('builds', () => {
        expect(new PreviewWall()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [PreviewWall],
            template: () => {
                return <mvjp-preview-wall />;
            },
        });

        expect(page.root).toMatchSnapshot();
    });
});
