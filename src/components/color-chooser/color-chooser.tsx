import { Component, Host, h, Prop } from '@stencil/core';
import { Colors } from './color-chooser.colors';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-color-chooser',
    shadow: true,
    styleUrl: 'color-chooser.css',
})
export class ColorChooser {
    private colors: string[] = ['white', 'grey', 'grey-dark', 'black'];

    /**
     *   choosen colorcode
     */
    @Prop() choosenColour: number;

    /**
     *   setter for colorcode
     */
    @Prop() updateColor: Function;

    private clickTile = color => {
        this.choosenColour = this.colors.indexOf(color);
        this.updateColor(this.choosenColour);
    };

    render() {
        return (
            <Host>
                <div class="color-chooser">
                    <mvjp-color-chooser-field
                        color={Colors.WHITE}
                        isActive={this.colors[this.choosenColour] === Colors.WHITE}
                        clickTile={this.clickTile}></mvjp-color-chooser-field>
                    <mvjp-color-chooser-field
                        color={Colors.GREY}
                        isActive={this.colors[this.choosenColour] === Colors.GREY}
                        clickTile={this.clickTile}></mvjp-color-chooser-field>
                    <mvjp-color-chooser-field
                        color={Colors.GREY_DARK}
                        isActive={this.colors[this.choosenColour] === Colors.GREY_DARK}
                        clickTile={this.clickTile}></mvjp-color-chooser-field>
                    <mvjp-color-chooser-field
                        color={Colors.BLACK}
                        isActive={this.colors[this.choosenColour] === Colors.BLACK}
                        clickTile={this.clickTile}></mvjp-color-chooser-field>
                </div>
            </Host>
        );
    }
}

Tunnel.injectProps(ColorChooser, ['choosenColour', 'updateColor']); // eslint-disable-line @stencil/ban-side-effects
