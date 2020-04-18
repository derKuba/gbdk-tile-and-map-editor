import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvjp-export-field-selector',
    styleUrl: 'export-field-selector.css',
    shadow: false,
})
export class ExportFieldSelector {
    /**
     *  navigate trough the overlay
     */
    @Prop() navigateTo: Function;

    /**
     *  the drawn matrix
     */
    @Prop() matrix: number[][][];

    /**
     *  selected checkboxes
     */
    @Prop() selectedFields: number[];

    /**
     *  handle choosing checkbox event
     */
    @Prop() handleTileClick: Function;

    private handleButtonClick = () => {
        if (this.selectedFields.length === 0) return;
        this.navigateTo();
    };

    render() {
        const field_checkboxes = this.matrix.map((field, position) => {
            return (
                <mvjp-export-checkbox-field
                    field={[...field]}
                    position={position}
                    isActive={this.selectedFields.includes(position)}
                    setSelectedTile={this.handleTileClick}
                    key={`checkbox_id_${position}`}
                />
            );
        });

        return (
            <Host>
                <div class="fields">{field_checkboxes}</div>

                <button onClick={this.handleButtonClick}> Export </button>
            </Host>
        );
    }
}
