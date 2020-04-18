import { Component, Host, h, Prop } from '@stencil/core';
import { Settings } from '../../models/settingsModel';
import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-sprite-number-switcher',
    styleUrl: 'sprite-number-switcher.css',
    shadow: true,
})
export class SpriteNumberSwitcher {
    /**
     *   global matrix setter
     */
    @Prop() changeTileMatrix: Function;

    /**
     *   which sprite tile is active
     */
    @Prop() indexTileMatrix: number;

    /**
     *   set global sprite tile
     */
    @Prop() updateSprite: Function;

    /**
     *   global settings
     */
    @Prop() settings: Settings;

    private onClick = index => {
        this.changeTileMatrix(index);
    };

    render() {
        const { spriteAmount } = this.settings;

        const tiles = new Array(spriteAmount)
            .fill(0, 0, spriteAmount)
            .map((_, i) => (
                <mvjp-sprite-number-switcher-tile
                    index={i}
                    isActive={this.indexTileMatrix === i}
                    clickTile={this.onClick}
                    key={`index_${i}`}
                />
            ));

        return <Host>{tiles}</Host>;
    }
}
Tunnel.injectProps(SpriteNumberSwitcher, ['settings', 'changeTileMatrix', 'indexTileMatrix']); // eslint-disable-line @stencil/ban-side-effects
