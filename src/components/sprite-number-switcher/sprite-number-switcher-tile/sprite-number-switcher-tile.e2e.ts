import { newE2EPage } from '@stencil/core/testing';

describe('mvjp-sprite-number-switcher-tile', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<mvjp-sprite-number-switcher-tile></mvjp-sprite-number-switcher-tile>');

        const element = await page.find('mvjp-sprite-number-switcher-tile');
        expect(element).toHaveClass('hydrated');
    });
});
