import { newE2EPage } from '@stencil/core/testing';

describe('mvjp-canvas-matrix', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<mvjp-canvas-matrix></mvjp-canvas-matrix>');

        const element = await page.find('mvjp-canvas-matrix');
        expect(element).toHaveClass('hydrated');
    });
});
