import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { Modal } from './modal';

describe('mvjp-modal', () => {
    it('builds', () => {
        expect(new Modal()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [Modal],
            template: () => {
                return (
                    <div>
                        <mvjp-modal isModalOpen={false}></mvjp-modal>
                        <mvjp-modal isModalOpen={true}>
                            <div> i am content </div>
                        </mvjp-modal>
                    </div>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should close modal', async () => {
        const modal = new Modal();
        modal.isModalOpen = true;
        modal.setIsModalOpen = jest.fn();

        modal.closeModal();

        expect(modal.setIsModalOpen).toBeCalledWith(false);
    });
});
