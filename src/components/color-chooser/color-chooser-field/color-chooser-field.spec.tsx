import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ColorChooserField } from './color-chooser-field';

describe('mvjp-color-chooser', () => {
    it('builds', () => {
        expect(new ColorChooserField()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [ColorChooserField],
            template: () => {
                return (
                    <div>
                        <mvjp-color-chooser-field color={'white'} isActive={true} clickTile={() => {}} />
                        <mvjp-color-chooser-field color={'black'} isActive={false} clickTile={() => {}} />
                    </div>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('click on clickhandler', async () => {
        const clickMock = jest.fn();
        const page = await newSpecPage({
            components: [ColorChooserField],
            template: () => {
                return <mvjp-color-chooser-field color={'black'} isActive={false} clickTile={clickMock} />;
            },
        });

        page.root.querySelector('.tile').click();
        await page.waitForChanges();

        expect(clickMock).toBeCalledWith('black');
    });
});
