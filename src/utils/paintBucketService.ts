/* eslint-disable max-params */
const neighbourPositons = [
    { y: -1, x: 0 }, // upper
    { y: 0, x: -1 }, // left
    { y: 0, x: 1 }, // right
    { y: 1, x: 0 }, // down
];

type MatrixPosition = {
    x: number;
    y: number;
};

const getNeighbours = (matrix: number[][], position, content: number) => {
    const neighbours = [];
    neighbourPositons.map(directions => {
        const neighbourY = position.y + directions.y;
        const neighbourX = position.x + directions.x;

        if (neighbourY < 0 || neighbourX < 0) return;
        if (neighbourY >= matrix.length || neighbourX >= matrix[neighbourY].length) return;

        if (matrix[neighbourY][neighbourX] === content) {
            neighbours.push({ y: neighbourY, x: neighbourX });
        }
    });

    return neighbours;
};

export const paintBucket = (
    matrix: number[][],
    position: MatrixPosition,
    currentColour: number,
    chosenColor: number
) => {
    const n = getNeighbours(matrix, position, currentColour);

    if (n.length === 0) {
        const { y, x } = position;
        matrix[y][x] = chosenColor;
        return matrix;
    }

    n.map(neighbour => {
        const { y, x } = neighbour;
        matrix[y][x] = chosenColor;
        matrix = paintBucket(matrix, neighbour, currentColour, chosenColor);
    });

    return matrix;
};
