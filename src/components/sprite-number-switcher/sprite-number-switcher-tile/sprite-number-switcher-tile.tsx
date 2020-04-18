import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mvjp-sprite-number-switcher-tile',
    styleUrl: 'sprite-number-switcher-tile.css',
    shadow: false,
})
export class SpriteNumberSwitcherTile {
    /**
     *   index of tile in array
     */
    @Prop() index: number;

    /**
     *   active state
     */
    @Prop() isActive: boolean;

    /**
     *  handle click event
     */
    @Prop() clickTile: Function;

    render() {
        const spriteIsActive = `${this.isActive ? 'active' : ''}`;
        return (
            <div class={`sprite-number-switcher-tile ${spriteIsActive}`} onClick={() => this.clickTile(this.index)}>
                <span>{this.index}</span>
            </div>
        );
    }
}
