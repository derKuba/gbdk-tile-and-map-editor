import { newE2EPage } from '@stencil/core/testing';

describe('mvjp-color-chooser', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<mvjp-color-chooser></mvjp-color-chooser>');

        const element = await page.find('mvjp-color-chooser');
        expect(element).toHaveClass('hydrated');
    });
});
