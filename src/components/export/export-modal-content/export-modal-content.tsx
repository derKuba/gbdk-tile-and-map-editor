import { Component, h, State, Prop } from '@stencil/core';

import Tunnel from '../../../provider/StateProvider';

enum CONTENT_TYPES {
    SELECTOR = 0,
    CODE_OUTPUT = 1,
}

@Component({
    tag: 'mvjp-export-modal-content',
    styleUrl: 'export-modal-content.css',
    shadow: true,
})
export class ExportModalContent {
    /**
     *  id of the display modal content
     */
    @State() activeIndex: number = CONTENT_TYPES.SELECTOR;

    /**
     *  state handler for choosen checkbox
     */
    @State() selectedFields: number[] = [];

    /**
     *  the painted matrix
     */
    @Prop() matrix: number[][][];

    private setIndex = index => {
        this.activeIndex = index;
    };

    private handleTileClick = position => {
        if (this.selectedFields[position] === position) {
            this.selectedFields[position] = undefined;
        } else {
            this.selectedFields[position] = position;
        }

        this.selectedFields = [...this.selectedFields];
    };

    render() {
        const selectedFields: any = this.selectedFields
            .filter(index => index !== undefined)
            .map(index => this.matrix[index]);

        if (this.activeIndex === CONTENT_TYPES.SELECTOR) {
            return (
                <mvjp-export-field-selector
                    navigateTo={() => this.setIndex(CONTENT_TYPES.CODE_OUTPUT)}
                    handleTileClick={this.handleTileClick}
                    selectedFields={this.selectedFields}
                    matrix={this.matrix}
                />
            );
        } else if (this.activeIndex === CONTENT_TYPES.CODE_OUTPUT) {
            return (
                <mvjp-export-code-output
                    navigateTo={() => this.setIndex(CONTENT_TYPES.SELECTOR)}
                    fields={selectedFields}
                />
            );
        }
    }
}
Tunnel.injectProps(ExportModalContent, ['matrix']); // eslint-disable-line @stencil/ban-side-effects
