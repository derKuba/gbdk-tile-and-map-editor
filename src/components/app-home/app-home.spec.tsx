import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { AppHome } from './app-home';

describe('app', () => {
    it('builds', () => {
        expect(new AppHome()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [AppHome],
            template: () => <app-home />,
        });

        expect(page.root).toMatchSnapshot();
    });
});
