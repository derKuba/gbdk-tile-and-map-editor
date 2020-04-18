export const createCTemplatesWeb = convertedLines => {
    const linesWithNewLines = convertedLines.join().replace(/(?:[^,]+,){8}/g, '$&<br/>');

    return {
        main: `<span class="intro">// main.c <br/> </span><span class="un">unsigned</span> <span class="char">char</span> <span class="clazz">TileTable </span><span class="arr">[ ]</span> = { <br/> <div class="code">${linesWithNewLines}</div>  <br/> };`,
        header:
            '<span class="intro">// main.h <br/></span> <span class="un">#define SpriteBank 0</span><br/><br/> <span class="un">extern unsigned char</span> <span class="clazz">TileTable </span><span class="arr">[ ]</span>;',
    };
};

export const createCTemplatesFile = convertedLines => {
    return {
        main: `unsigned char Sprites[] = { \n ${convertedLines} \n }`,
        header: '#define SpriteBank 0 \n extern unsigned char Sprites [];',
    };
};
