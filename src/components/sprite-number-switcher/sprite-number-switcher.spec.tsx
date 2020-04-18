import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { SpriteNumberSwitcher } from './sprite-number-switcher';

describe('mvjp-sprite-number-switcher', () => {
    it('builds', () => {
        expect(new SpriteNumberSwitcher()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const settings = {
            fieldWidth: 8,
            fieldHeight: 8,
            spriteAmount: 12,
            isGridVisible: true,
            isFieldNumberVisible: true,
        };

        const page = await newSpecPage({
            components: [SpriteNumberSwitcher],
            template: () => {
                return (
                    <mvjp-sprite-number-switcher
                        changeTileMatrix={() => {}}
                        choosenSprite={0}
                        settings={settings}
                        updateSprite={() => {}}></mvjp-sprite-number-switcher>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });
});
