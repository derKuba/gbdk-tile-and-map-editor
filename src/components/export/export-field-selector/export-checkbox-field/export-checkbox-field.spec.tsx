import { newSpecPage } from '@stencil/core/dist/testing';
import { h } from '@stencil/core';

import { ExportCheckboxField } from './export-checkbox-field';

const field = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

describe('mvjp-export-checkbox-field', () => {
    it('builds', () => {
        expect(new ExportCheckboxField()).toBeTruthy();
    });

    it('matches snapshot', async () => {
        const page = await newSpecPage({
            components: [ExportCheckboxField],
            template: () => {
                return (
                    <div>
                        <mvjp-export-checkbox-field
                            field={[...field]}
                            position={0}
                            isActive={true}
                            setSelectedTile={() => {}}
                        />
                        <mvjp-export-checkbox-field
                            field={[...field]}
                            position={1}
                            isActive={false}
                            setSelectedTile={() => {}}
                        />
                    </div>
                );
            },
        });

        expect(page.root).toMatchSnapshot();
    });

    it('should handle click', async () => {
        const setSelectedTile = jest.fn();

        const page = await newSpecPage({
            components: [ExportCheckboxField],
            template: () => {
                return (
                    <mvjp-export-checkbox-field
                        field={[...field]}
                        position={23}
                        isActive={true}
                        setSelectedTile={setSelectedTile}
                    />
                );
            },
        });

        page.root.querySelector('.field').click();
        await page.waitForChanges();
        expect(setSelectedTile).toBeCalledWith(23);
    });
});
