import { convertColorCodeMatrixToHEXLine } from './convertColourCodeMatrixToHex';

const testArray: number[][][] = [];

describe('exporter', () => {
    beforeEach(() => {
        for (let i = 0; i < 12; i++) {
            testArray.push(Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 0)));
        }

        testArray[0] = [
            [3, 2, 1, 0, 3, 2, 1, 0],
            [2, 1, 0, 3, 2, 1, 0, 3],
            [1, 0, 3, 2, 1, 0, 3, 2],
            [0, 3, 2, 1, 0, 3, 2, 1],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [2, 1, 0, 3, 2, 1, 0, 3],
            [1, 0, 3, 2, 1, 0, 3, 2],
            [0, 3, 2, 1, 0, 3, 2, 1],
        ];

        testArray[1] = [
            [3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];

        testArray[2] = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3],
        ];

        testArray[3] = [
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
            [3, 3, 2, 2, 1, 1, 0, 0],
        ];

        testArray[4] = [
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
            [0, 0, 1, 1, 2, 2, 3, 3],
        ];

        testArray[5] = [
            [3, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [3, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];

        testArray[6] = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [3, 3, 3, 3, 3, 3, 3, 3],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2],
            [3, 3, 3, 3, 3, 3, 3, 3],
        ];

        testArray[7] = [
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
            [3, 2, 1, 0, 3, 2, 1, 0],
        ];

        testArray[8] = [
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
            [0, 1, 2, 3, 0, 1, 2, 3],
        ];
    });
    it('solves pic 0', () => {
        const expectedString =
            '0xAA, 0xCC, 0x55, 0x99, 0xAA, 0x33, 0x55, 0x66, 0xAA, 0xCC, 0x55, 0x99, 0xAA, 0x33, 0x55, 0x66';
        expect(convertColorCodeMatrixToHEXLine(testArray[0])).toEqualText(expectedString);
    });
    it('solves pic 1', () => {
        const expectedString =
            '0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0xFF, 0x00, 0xFF, 0xFF, 0x00, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00';
        expect(convertColorCodeMatrixToHEXLine(testArray[1])).toEqualText(expectedString);
    });
    it('solves pic 2', () => {
        const expectedString =
            '0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0xFF, 0x00, 0x00, 0xFF, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF';
        expect(convertColorCodeMatrixToHEXLine(testArray[2])).toEqualText(expectedString);
    });
    it('solves pic 3', () => {
        const expectedString =
            '0xCC, 0xF0, 0xCC, 0xF0, 0xCC, 0xF0, 0xCC, 0xF0, 0xCC, 0xF0, 0xCC, 0xF0, 0xCC, 0xF0, 0xCC, 0xF0';
        expect(convertColorCodeMatrixToHEXLine(testArray[3])).toEqualText(expectedString);
    });
    it('solves pic 4', () => {
        const nullString =
            '0x33, 0x0F, 0x33, 0x0F, 0x33, 0x0F, 0x33, 0x0F, 0x33, 0x0F, 0x33, 0x0F, 0x33, 0x0F, 0x33, 0x0F';
        expect(convertColorCodeMatrixToHEXLine(testArray[4])).toEqualText(nullString);
    });
    it('solves pic 5', () => {
        const expectedString =
            '0xFF, 0xFF, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00';
        expect(convertColorCodeMatrixToHEXLine(testArray[5])).toEqualText(expectedString);
    });
    it('solves pic 6', () => {
        const expectedString =
            '0x00, 0x00, 0xFF, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0xFF, 0x00, 0x00, 0xFF, 0xFF, 0xFF';
        expect(convertColorCodeMatrixToHEXLine(testArray[6])).toEqualText(expectedString);
    });
    it('solves pic 7', () => {
        const expectedString =
            '0xAA, 0xCC, 0xAA, 0xCC, 0xAA, 0xCC, 0xAA, 0xCC, 0xAA, 0xCC, 0xAA, 0xCC, 0xAA, 0xCC, 0xAA, 0xCC';
        expect(convertColorCodeMatrixToHEXLine(testArray[7])).toEqualText(expectedString);
    });
    it('solves pic 8', () => {
        const expectedString =
            '0x55, 0x33, 0x55, 0x33, 0x55, 0x33, 0x55, 0x33, 0x55, 0x33, 0x55, 0x33, 0x55, 0x33, 0x55, 0x33';
        expect(convertColorCodeMatrixToHEXLine(testArray[8])).toEqualText(expectedString);
    });
});
