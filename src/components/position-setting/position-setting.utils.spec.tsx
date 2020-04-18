/* eslint-disable max-lines */
import {
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
    rotateMatrix,
    flipVertically,
    flipHorizontally,
    clearField,
} from './position-setting.utils';

describe('mvjp-position-setting', () => {
    it('should move rows one up', () => {
        const testArray = [
            [7, 7, 7],
            [6, 6, 6],
            [5, 5, 5],
            [4, 4, 4],
        ];

        const moved = [
            [6, 6, 6],
            [5, 5, 5],
            [4, 4, 4],
            [7, 7, 7],
        ];

        expect(moveUp(testArray)).toEqual(moved);
    });

    it('should move rows one down', () => {
        const testArray = [
            [7, 7, 7],
            [6, 6, 6],
            [5, 5, 5],
            [4, 4, 4],
        ];

        const moved = [
            [4, 4, 4],
            [7, 7, 7],
            [6, 6, 6],
            [5, 5, 5],
        ];

        expect(moveDown(testArray)).toEqual(moved);
    });

    it('should move colums left', () => {
        const testArray = [
            [7, 6, 5],
            [7, 6, 5],
            [7, 6, 5],
            [7, 6, 5],
        ];

        const moved = [
            [6, 5, 7],
            [6, 5, 7],
            [6, 5, 7],
            [6, 5, 7],
        ];

        expect(moveLeft(testArray)).toEqual(moved);
    });

    it('should move colums right', () => {
        const testArray = [
            [7, 6, 5],
            [7, 6, 5],
            [7, 6, 5],
            [7, 6, 5],
        ];

        const moved = [
            [5, 7, 6],
            [5, 7, 6],
            [5, 7, 6],
            [5, 7, 6],
        ];

        expect(moveRight(testArray)).toEqual(moved);
    });

    it('should rotate the field', () => {
        let testArray = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        let moved = [
            [3, 6, 9],
            [2, 5, 8],
            [1, 4, 7],
        ];

        expect(rotateMatrix(testArray)).toEqual(moved);

        testArray = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];

        moved = [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13],
        ];

        expect(rotateMatrix(testArray)).toEqual(moved);
    });

    it('should flip vertically the field 3x3', () => {
        const testArray = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        const moved = [
            [3, 2, 1],
            [6, 5, 4],
            [9, 8, 7],
        ];

        expect(flipVertically(testArray)).toEqual(moved);
    });

    it('should flip vertically the field 4x4', () => {
        const testArray = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];

        const moved = [
            [4, 3, 2, 1],
            [8, 7, 6, 5],
            [12, 11, 10, 9],
            [16, 15, 14, 13],
        ];

        expect(flipVertically(testArray)).toEqual(moved);
    });

    it('should flip horizontally the field 3x3', () => {
        const testArray = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        const moved = [
            [7, 8, 9],
            [4, 5, 6],
            [1, 2, 3],
        ];

        expect(flipHorizontally(testArray)).toEqual(moved);
    });

    it('should flip horizontally the field 4x4', () => {
        const testArray = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];

        const moved = [
            [13, 14, 15, 16],
            [9, 10, 11, 12],
            [5, 6, 7, 8],
            [1, 2, 3, 4],
        ];

        const expected = flipHorizontally(testArray);

        expect(expected).toEqual(moved);
    });
    it('should clear the field', () => {
        const moved = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];

        expect(clearField(3, 3)).toEqual(moved);
    });
});
