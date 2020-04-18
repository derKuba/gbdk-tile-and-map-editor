import { newE2EPage } from '@stencil/core/testing';

describe('mvjp-preview', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<mvjp-preview></mvjp-preview>');

        const element = await page.find('mvjp-preview');
        expect(element).toHaveClass('hydrated');
    });
});
