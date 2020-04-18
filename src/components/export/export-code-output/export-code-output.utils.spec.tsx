import { createCTemplatesWeb, createCTemplatesFile } from './export-code-output.utils';

describe('Export-Code-Output-Utils', () => {
    it('createCTemplates', () => {
        const lines = ['0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00'];
        expect(createCTemplatesWeb(lines)).toEqual({
            header:
                '<span class="intro">// main.h <br/></span> <span class="un">#define SpriteBank 0</span><br/><br/> <span class="un">extern unsigned char</span> <span class="clazz">TileTable </span><span class="arr">[ ]</span>;',
            main:
                '<span class="intro">// main.c <br/> </span><span class="un">unsigned</span> <span class="char">char</span> <span class="clazz">TileTable </span><span class="arr">[ ]</span> = { <br/> <div class="code">0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,<br/>0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00</div>  <br/> };',
        });
        expect(createCTemplatesFile(lines)).toEqual({
            header: '#define SpriteBank 0 \n extern unsigned char Sprites [];',
            main:
                'unsigned char Sprites[] = { \n 0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00 \n }',
        });
    });
});
