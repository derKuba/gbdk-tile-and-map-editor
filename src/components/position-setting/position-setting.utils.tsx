export const moveUp = (field: number[][] | number[]): number[][] | number[] => {
    const tmp: any = field[0];
    field.splice(0, 1);
    field.push(tmp);

    return field;
};

export const moveDown = (field: number[][]): number[][] => {
    const tmp = field[field.length - 1];
    field.pop();
    field.unshift(tmp);

    return field;
};

export const moveLeft = (field: number[][]): number[][] => {
    field.forEach((row: any) => {
        row = moveUp(row);
    });

    return field;
};

export const moveRight = (field: number[][]): number[][] => {
    field.forEach((row: any) => {
        row = moveDown(row);
    });

    return field;
};

// special thx to https://gist.github.com/joshwcomeau/5b600d561f07f21b1618e1ec0fde3c2e#file-snail-flip-matrix-js
const flipMatrix = matrix => matrix[0].map((_, index) => matrix.map(row => row[index]));

export const rotateMatrix = matrix => flipMatrix(matrix).reverse();
// clockwise  flipMatrix(matrix.reverse())

// special thx to https://gist.github.com/RoryMearns/cd0e8ea604c9832b3727
export const flipHorizontally = (field: number[][]): number[][] => {
    let tmp: number[] = [];
    for (let row = 0; row < field.length / 2; row++) {
        tmp = field[field.length - row - 1];
        field[field.length - row - 1] = field[row];
        field[row] = tmp;
    }
    return field;
};
// special thx to https://gist.github.com/RoryMearns/cd0e8ea604c9832b3727
export const flipVertically = (field: number[][]): number[][] => {
    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[0].length / 2; col++) {
            let tmp: number = field[row][field[0].length - col - 1];
            field[row][field[0].length - col - 1] = field[row][col];
            field[row][col] = tmp;
        }
    }
    return field;
};

export const clearField = (fieldHeight, fieldWidth) => {
    return Array.from({ length: fieldHeight }, () => Array.from({ length: fieldWidth }, () => 0));
};
