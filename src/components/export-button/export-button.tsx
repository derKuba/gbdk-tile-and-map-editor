import { Component, Host, h, Prop } from '@stencil/core';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-export-button',
    shadow: true,
    styleUrl: 'export-button.css',
})
export class ExportButton {
    /**
     *  display modal toggle event
     */
    @Prop() setIsModalOpen: Function;

    private openMenu = () => {
        this.setIsModalOpen(true);
    };

    render() {
        return (
            <Host>
                <button class="export-button" onClick={this.openMenu}>
                    Export
                </button>
            </Host>
        );
    }
}

Tunnel.injectProps(ExportButton, ['setIsModalOpen']); // eslint-disable-line @stencil/ban-side-effects
