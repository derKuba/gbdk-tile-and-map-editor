import { Component, Host, h, Prop } from '@stencil/core';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-modal',
    styleUrl: 'modal.css',
    shadow: true,
})
export class Modal {
    /**
     *  display modal toggle event
     */
    @Prop() setIsModalOpen: Function;

    /**
     *  is modal open state
     */
    @Prop() isModalOpen: boolean;

    private closeModal = () => {
        this.setIsModalOpen(false);
    };

    render() {
        if (!this.isModalOpen) return null;

        return (
            <Host>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close">
                            <button onClick={this.closeModal}> &times; </button>
                        </div>
                        <slot />
                    </div>
                </div>
            </Host>
        );
    }
}

Tunnel.injectProps(Modal, ['setIsModalOpen', 'isModalOpen']); // eslint-disable-line @stencil/ban-side-effects
