import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ColorChooser } from './color-chooser';

describe('mvjp-color-chooser', () => {
    it('builds', () => {
        expect(new ColorChooser()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [ColorChooser],
            template: () => {
                return <mvjp-color-chooser choosenColour={0} updateColor={() => {}}></mvjp-color-chooser>;
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('click on clickhandler', async () => {
        const colorChooser = new ColorChooser();
        colorChooser.updateColor = jest.fn();

        colorChooser.clickTile('black');
        expect(colorChooser.choosenColour).toBe(3);
        expect(colorChooser.updateColor).toBeCalledWith(3);
    });
});
