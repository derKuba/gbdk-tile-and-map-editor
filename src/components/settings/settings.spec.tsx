import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { SettingsUI } from './settings';

describe('mvjp-settings', () => {
    let settings;
    let page;
    beforeEach(async () => {
        settings = {
            fieldWidth: 8,
            fieldHeight: 8,
            spriteAmount: 12,
            isGridVisible: false,
            isFieldNumberVisible: false,
        };

        page = await newSpecPage({
            components: [SettingsUI],
            template: () => {
                return <mvjp-settings-ui settings={settings} setSettings={() => {}} />;
            },
        });
    });

    it('builds', () => {
        expect(new SettingsUI()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const setSettings = () => jest.fn();

        const snapShotPage = await newSpecPage({
            components: [SettingsUI],
            template: () => {
                return <mvjp-settings-ui settings={settings} setSettings={setSettings} />;
            },
        });

        expect(snapShotPage.root).toMatchSnapshot();
    });

    it('should toggle the visibility', async () => {
        page.root.shadowRoot.querySelector('.settingsIcon').click();

        await page.waitForChanges();

        expect(page.rootInstance.isContentVisible).toBe(true);
    });

    it('should set fieldwith', async () => {
        const widthElement = page.root.shadowRoot.querySelector('input[name="width"]');
        const event = new Event('input', { bubbles: true, cancelable: true });

        widthElement.value = 12;
        widthElement.dispatchEvent(event);

        await page.waitForChanges();

        expect(page.rootInstance.settings.fieldWidth).toBe(12);
    });

    it('should set fieldHeight', async () => {
        const heightElement = page.root.shadowRoot.querySelector('input[name="height"]');
        const event = new Event('input', { bubbles: true, cancelable: true });

        heightElement.value = 12;
        heightElement.dispatchEvent(event);

        await page.waitForChanges();

        expect(page.rootInstance.settings.fieldHeight).toBe(12);
    });

    it('should set spriteAmount', async () => {
        const spriteAmountElement = page.root.shadowRoot.querySelector('input[name="spriteAmount"]');
        const event = new Event('input', { bubbles: true, cancelable: true });

        spriteAmountElement.value = 7;
        spriteAmountElement.dispatchEvent(event);

        await page.waitForChanges();

        expect(page.rootInstance.settings.spriteAmount).toBe(7);
    });

    it('should set grid', async () => {
        const event = new Event('input', { bubbles: true, cancelable: true });
        const grid = page.root.shadowRoot.querySelector('input[name="grid"]');
        grid.checked = true;
        grid.dispatchEvent(event);

        await page.waitForChanges();

        expect(page.rootInstance.settings.isGridVisible).toBe(true);
    });

    it('should set numbers', async () => {
        const event = new Event('input', { bubbles: true, cancelable: true });
        const grid = page.root.shadowRoot.querySelector('input[name="numbers"]');
        grid.checked = true;
        grid.dispatchEvent(event);

        await page.waitForChanges();

        expect(page.rootInstance.settings.isFieldNumberVisible).toBe(true);
    });
});
