import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'mvjp-preview-wall',
    styleUrl: 'preview-wall.css',
    shadow: true,
})
export class PreviewWall {
    render() {
        let previewWall: HTMLElement[] = [];
        const FIELD_SIZE = 4;
        for (let index = 0; index < FIELD_SIZE; index++) {
            for (let j = 0; j < FIELD_SIZE; j++) {
                previewWall.push(<mvjp-preview size="s" standalone={true} />);
            }
        }

        return <Host>{previewWall}</Host>;
    }
}
