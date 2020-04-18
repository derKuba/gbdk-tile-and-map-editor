import { Component, Host, h, Prop } from '@stencil/core';

import { PaintModus } from '../../models/paintModus';
import { paintBucket } from '../../utils/paintBucketService';
import { Settings } from '../../models/settingsModel';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-canvas-matrix',
    styleUrl: 'canvas-matrix.css',
    shadow: true,
})
export class CanvasMatrix {
    private isMoving: boolean = false;

    /**
     *   choosen colorcode
     */
    @Prop() choosenColour: number;

    /**
     *   state of the entire matrix
     */
    @Prop() matrix: number[][][];

    /**
     *   active sprite tile
     */
    @Prop() indexTileMatrix: number;

    /**
     *   set matrix
     */
    @Prop() setMatrix: Function;

    /**
     *   brush or bucket
     */
    @Prop() paintModus: PaintModus;

    /**
     *   application settings
     */
    @Prop() settings: Settings;

    private clickMatrixTile = position => {
        if (this.paintModus === PaintModus.BRUSH) {
            this.matrix[this.indexTileMatrix][position.y][position.x] = this.choosenColour;
        } else if (this.paintModus === PaintModus.BUCKET) {
            if (this.matrix[this.indexTileMatrix][position.y][position.x] === this.choosenColour) return;

            this.matrix[this.indexTileMatrix] = paintBucket(
                this.matrix[this.indexTileMatrix],
                position,
                this.matrix[this.indexTileMatrix][position.y][position.x],
                this.choosenColour
            );
        }

        this.matrix = [...this.matrix];
        this.setMatrix(this.matrix);
    };

    private mouseUp = () => {
        this.isMoving = false;
    };

    private mouseDown = () => {
        this.isMoving = true;
    };

    private mouseMove = event => {
        if (this.isMoving && this.paintModus === PaintModus.BRUSH) {
            try {
                const targetPos = JSON.parse(event.target.dataset.pos);
                this.clickMatrixTile(targetPos);
            } catch (jsonParseTargetError) {
                console.log(jsonParseTargetError); // eslint-disable-line no-undef
            }
        }
    };

    render() {
        const tileMatrix = this.matrix[this.indexTileMatrix];

        const field = tileMatrix.map((tileRow: number[], y: number) => (
            <div class="matrixRow" key={`tile_at_${y}`}>
                {tileRow.map((colorCode: number, x: number) => (
                    <mvjp-canvas-matrix-tile
                        key={`tile_at_${y}_${x}`}
                        position={{ y, x }}
                        handleClick={this.clickMatrixTile}
                        colour={colorCode}
                        showGrid={this.settings.isGridVisible}>
                        {this.settings.isFieldNumberVisible ? <span>{`${y}_${x}`}</span> : null}
                    </mvjp-canvas-matrix-tile>
                ))}
            </div>
        ));

        return (
            <Host>
                <div
                    class="canvas-matrix-field"
                    onMouseMove={this.mouseMove}
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}>
                    {field}
                </div>
            </Host>
        );
    }
}

Tunnel.injectProps(CanvasMatrix, ['choosenColour', 'matrix', 'setMatrix', 'indexTileMatrix', 'paintModus', 'settings']); // eslint-disable-line @stencil/ban-side-effects
