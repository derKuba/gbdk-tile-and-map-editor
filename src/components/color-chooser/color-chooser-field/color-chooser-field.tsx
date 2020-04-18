import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvjp-color-chooser-field',
    shadow: false,
    styleUrl: 'color-chooser-field.css',
})
export class ColorChooserField {
    /**
     *   choosen colorcode
     */
    @Prop() color: string;

    /**
     *   choosen field
     */
    @Prop() isActive: boolean;

    /**
     *   handle click
     */
    @Prop() clickTile: Function;

    render() {
        const colorClass = `gb-${this.color} ${this.isActive ? 'active' : ''}`;

        return <div class={`tile ${colorClass}`} onClick={() => this.clickTile(this.color)}></div>;
    }
}
