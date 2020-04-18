import { paintBucket } from './paintBucketService';

describe('Paint Bucket', () => {
    it('gets paints correct path borders', () => {
        const matrix = [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ];

        const position = {
            x: 0,
            y: 0,
        };

        const expectedMatrix = paintBucket(matrix, position, 1, 2);

        expect(expectedMatrix).toEqual([
            [2, 2, 2, 2, 2, 2, 2, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 1, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2],
        ]);
    });

    it('gets paints correct path borders', () => {
        const matrix = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ];

        const position = {
            x: 0,
            y: 0,
        };

        const expectedMatrix = paintBucket(matrix, position, 1, 2);

        expect(expectedMatrix).toEqual([
            [2, 2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 1, 1, 1, 1, 0, 2],
            [2, 0, 1, 0, 0, 1, 0, 2],
            [2, 0, 1, 0, 0, 1, 0, 2],
            [2, 0, 1, 1, 1, 1, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 2],
            [2, 2, 2, 2, 2, 2, 2, 2],
        ]);
    });

    it('gets paints correct path inner borders', () => {
        const matrix = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ];
        const position = {
            x: 2,
            y: 2,
        };

        const expectedMatrix = paintBucket(matrix, position, 1, 2);

        expect(expectedMatrix).toEqual([
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 2, 2, 2, 0, 1],
            [1, 0, 2, 0, 0, 2, 0, 1],
            [1, 0, 2, 0, 0, 2, 0, 1],
            [1, 0, 2, 2, 2, 2, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]);
    });
});
