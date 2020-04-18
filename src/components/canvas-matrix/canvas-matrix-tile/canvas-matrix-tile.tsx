import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvjp-canvas-matrix-tile',
    shadow: false,
    styleUrl: 'canvas-matrix-tile.css',
})
export class CanvasMatrixTile {
    private colors: string[] = ['white', 'grey', 'grey-dark', 'black'];

    /**
     *   redirect click event to parent
     */
    @Prop() handleClick: Function;

    /**
     *   {x, y} coordinates
     */
    @Prop() position: object;

    /**
     *   color code of this tile
     */
    @Prop() colour: number;

    /**
     *   show borders
     */
    @Prop() showGrid: boolean;

    render() {
        const showGridclass = this.showGrid ? '' : 'grid-off';
        const colorClass = `gb-${this.colors[this.colour]}`;

        return (
            <div
                class={`canvas-matrix-tile ${colorClass} ${showGridclass}`}
                onClick={() => this.handleClick(this.position)}
                data-pos={`${JSON.stringify(this.position)}`}>
                {' '}
                <slot />
            </div>
        );
    }
}
