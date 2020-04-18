import { newE2EPage } from '@stencil/core/testing';

describe('mvjp-sprite-number-switcher', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<mvjp-sprite-number-switcher></mvjp-sprite-number-switcher>');

        const element = await page.find('mvjp-sprite-number-switcher');
        expect(element).toHaveClass('hydrated');
    });
});
