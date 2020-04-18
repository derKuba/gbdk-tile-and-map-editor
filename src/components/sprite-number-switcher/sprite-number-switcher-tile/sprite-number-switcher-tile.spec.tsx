import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { SpriteNumberSwitcherTile } from './sprite-number-switcher-tile';

describe('mvjp-sprite-number-switcher-tile', () => {
    it('builds', () => {
        expect(new SpriteNumberSwitcherTile()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [SpriteNumberSwitcherTile],
            template: () => {
                return (
                    <div>
                        <mvjp-sprite-number-switcher-tile index={0} isActive={false} clickTile={() => {}} />
                        <mvjp-sprite-number-switcher-tile index={1} isActive={true} clickTile={() => {}} />
                        <mvjp-sprite-number-switcher-tile index={2} isActive={false} clickTile={() => {}} />
                    </div>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('matches snapshot', async () => {
        const clickTile = jest.fn();
        const page = await newSpecPage({
            components: [SpriteNumberSwitcherTile],
            template: () => {
                return (
                    <div>
                        <mvjp-sprite-number-switcher-tile index={23} isActive={false} clickTile={clickTile} />
                        <mvjp-sprite-number-switcher-tile index={1} isActive={true} clickTile={() => {}} />
                        <mvjp-sprite-number-switcher-tile index={2} isActive={false} clickTile={() => {}} />
                    </div>
                );
            },
        });
        console.log(page.root.innerHTML);
        page.root.querySelector('.sprite-number-switcher-tile').click();

        expect(clickTile).toBeCalledWith(23);
    });
});
