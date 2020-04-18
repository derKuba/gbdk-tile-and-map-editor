import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvjp-export-checkbox-field',
    styleUrl: 'export-checkbox-field.css',
    shadow: false,
})
export class ExportCheckboxField {
    /**
     *  the selected field of the matrix
     */
    @Prop() field: number[][];

    /**
     *  state of the checkbox
     */
    @Prop() isActive: boolean;

    /**
     *  position of the checkbox in the sprite tile viewer
     *
     */
    @Prop() position: number;

    /**
     *  event to select this specific checkbox
     */
    @Prop() setSelectedTile: Function;

    private mapColorCodeToColour = colorCode => {
        const colors: string[] = ['white', 'grey', 'grey-dark', 'black'];
        return colors[colorCode];
    };

    private handleClick = () => {
        this.setSelectedTile(this.position);
    };

    render() {
        const field = this.field.map((tileRow: number[], y: number) => (
            <div class="matrixRow" key={`index_${y}`}>
                {tileRow.map((colorCode: number, x: number) => (
                    <div
                        onClick={this.handleClick}
                        class={`field gb-${this.mapColorCodeToColour(colorCode)}`}
                        key={`index_${y}_${x}`}></div>
                ))}
            </div>
        ));

        const isActiveClass = this.isActive === true ? 'active' : '';

        return <div class={`field-box ${isActiveClass}`}>{field}</div>;
    }
}
