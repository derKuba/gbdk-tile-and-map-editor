/**  there are 4 colors: white, lightgrey, darkgray, black;
 *   these colors are represented in this pattern:
 *      0: (w) white: 00
 *      1: (l) lightgrey: 10
 *      2: (d) darkgray: 01
 *      3: (b) black: 11
 *
 *      take this array [3,2,1,0, 1,3,0,2] and write the color codes in 2 lines
 *
 *      b  d l w l b w d
 *      1  0 1 0 1 1 0 0 ===> (1010) in hex is A , (1100) is C => AC
 *      1  1 0 0 0 1 0 1 ===> (1100) is C, (0101) is 5         => C5
 */

const convertLine = (line: number[]) => {
    const colorCodeToBinary = {
        0: [0, 0],
        1: [1, 0],
        2: [0, 1],
        3: [1, 1],
    };

    let firstLine = [];
    let secondLine = [];
    let firstHexDigit = '',
        secondHexDigit = '';
    line.map(num => {
        firstLine.push(colorCodeToBinary[num][0]);
        secondLine.push(colorCodeToBinary[num][1]);

        if (firstLine.length % 4 === 0 && secondLine.length % 4 === 0) {
            firstHexDigit += parseInt(firstLine.join(''), 2)
                .toString(16)
                .toUpperCase();
            secondHexDigit += parseInt(secondLine.join(''), 2)
                .toString(16)
                .toUpperCase();

            firstLine = [];
            secondLine = [];
        }
    });

    return [`0x${firstHexDigit}`, `0x${secondHexDigit}`];
};

export const convertColorCodeMatrixToHEXLine = (field: number[][]): string => {
    let hexCodes = '';
    field.map((line, index) => {
        hexCodes += convertLine(line).join(', ');
        if (index < field.length - 1) {
            hexCodes += ', ';
        }
    });
    return hexCodes;
};
