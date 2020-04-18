import { Component, Host, h, Prop } from '@stencil/core';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-preview',
    styleUrl: 'preview.css',
    shadow: true,
})
export class Preview {
    /**
     *   which format
     */
    @Prop() size: string;

    /**
     *   global matrix
     */
    @Prop() matrix: number[][][];

    /**
     *   chosen matrix tile
     */
    @Prop() indexTileMatrix: number;

    /**
     *   usage without a list
     */
    @Prop() standalone: boolean = false;

    private mapColorCodeToColour = colorCode => {
        const colors: string[] = ['white', 'grey', 'grey-dark', 'black'];
        return colors[colorCode];
    };

    render() {
        const sizeClass = this.size === 's' ? 'small' : this.size === 'l' ? 'large' : null;
        const tileMatrix = this.matrix[this.indexTileMatrix];

        const previewField = tileMatrix.map((tileRow: number[], y: number) => (
            <div class="matrixRow" key={`index_${y}`}>
                {tileRow.map((colorCode: number, x: number) => (
                    <div
                        class={`preview-tile ${sizeClass} gb-${this.mapColorCodeToColour(colorCode)}`}
                        key={`index_${y}_${x}`}></div>
                ))}
            </div>
        ));

        return (
            <Host>
                <div class={`preview-box ${sizeClass} ${this.standalone ? 'standalone' : ''}`}>{previewField}</div>
            </Host>
        );
    }
}

Tunnel.injectProps(Preview, ['matrix', 'indexTileMatrix']); // eslint-disable-line @stencil/ban-side-effects
