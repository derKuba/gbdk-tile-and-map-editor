/* eslint-disable max-lines */
import { Component, Host, h, Prop } from '@stencil/core';
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

import Tunnel from '../../provider/StateProvider';
import { Settings } from '../../models/settingsModel';

enum DIRECTION {
    'UP' = 0,
    'DOWN' = 1,
    'LEFT' = 2,
    'RIGHT' = 3,
}

enum FLIP_TYPE {
    'VERTICALLY' = 0,
    'HORIZONTALLY' = 1,
}

@Component({
    tag: 'mvjp-position-setting',
    styleUrl: 'position-setting.css',
    shadow: true,
})
export class PositionSetting {
    /**
     *   global matrix
     */
    @Prop() matrix: number[][][];

    /**
     *   chosen matrix tile
     */
    @Prop() indexTileMatrix: number;

    /**
     *   set matrix
     */
    @Prop() setMatrix: Function;

    /**
     *   application settings
     */
    @Prop() settings: Settings;

    private moveField = direction => {
        switch (direction) {
            case DIRECTION.UP:
                moveUp(this.matrix[this.indexTileMatrix]);
                break;
            case DIRECTION.DOWN:
                moveDown(this.matrix[this.indexTileMatrix]);
                break;
            case DIRECTION.LEFT:
                moveLeft(this.matrix[this.indexTileMatrix]);
                break;
            case DIRECTION.RIGHT:
                moveRight(this.matrix[this.indexTileMatrix]);
                break;
        }
        this.matrix = [...this.matrix];
        this.setMatrix(this.matrix);
    };

    private rotateField = () => {
        this.matrix[this.indexTileMatrix] = rotateMatrix(this.matrix[this.indexTileMatrix]);
        this.matrix = [...this.matrix];
        this.setMatrix(this.matrix);
    };

    private clearField = () => {
        this.matrix[this.indexTileMatrix] = clearField(this.settings.fieldWidth, this.settings.fieldHeight);
        this.matrix = [...this.matrix];
        this.setMatrix(this.matrix);
    };

    private flipField = type => {
        switch (type) {
            case FLIP_TYPE.VERTICALLY:
                flipVertically(this.matrix[this.indexTileMatrix]);
                break;
            case FLIP_TYPE.HORIZONTALLY:
                flipHorizontally(this.matrix[this.indexTileMatrix]);
                break;
        }
        this.matrix = [...this.matrix];
        this.setMatrix(this.matrix);
    };

    render() {
        return (
            <Host>
                <div class="line">
                    <div class="box icon-alignment">
                        <img
                            class="paint-setting-icon"
                            onClick={() => this.flipField(FLIP_TYPE.HORIZONTALLY)}
                            src={'./assets/icon/freepik_h_flip.png'}
                            alt="horizontal flip icon"
                            title="Flip Matrix horizontally"
                        />
                    </div>
                    <div class="v-pad icon-alignment">
                        <img
                            class="arrow up"
                            onClick={() => this.moveField(DIRECTION.UP)}
                            src={'./assets/icon/freepik_play.png'}
                            alt="arrow up icon"
                            title="Move whole Matrix up"
                        />
                    </div>
                    <div class="box icon-alignment">
                        <img
                            class="paint-setting-icon"
                            onClick={() => this.flipField(FLIP_TYPE.VERTICALLY)}
                            src={'./assets/icon/freepik_v_flip.png'}
                            alt="flip vertically icon"
                            title="Flip Matrix vertically"
                        />
                    </div>
                </div>

                <div class="line">
                    <div class="h-pad icon-alignment">
                        <img
                            class="arrow left"
                            onClick={() => this.moveField(DIRECTION.LEFT)}
                            src={'./assets/icon/freepik_play.png'}
                            alt="arrow left icon"
                            title="Move whole Matrix left"
                        />
                    </div>
                    <div class="center"></div>
                    <div class="h-pad icon-alignment">
                        <img
                            class="arrow right"
                            onClick={() => this.moveField(DIRECTION.RIGHT)}
                            src={'./assets/icon/freepik_play.png'}
                            alt="arrow right icon"
                            title="Move whole Matrix right"
                        />
                    </div>
                </div>

                <div class="line">
                    <div class="box icon-alignment">
                        <img
                            class="paint-setting-icon"
                            onClick={() => this.rotateField()}
                            src={'./assets/icon/freepik_reload.png'}
                            alt="arrow turn around icon"
                            title="Turn matrix counter clockwise"
                        />
                    </div>
                    <div class="v-pad icon-alignment">
                        <img
                            class="arrow down"
                            onClick={() => this.moveField(DIRECTION.DOWN)}
                            src={'./assets/icon/freepik_play.png'}
                            alt="arrow down icon"
                            title="Move whole Matrix down"
                        />
                    </div>
                    <div class="box icon-alignment">
                        <img
                            class="paint-setting-icon"
                            onClick={() => this.clearField()}
                            src={'./assets/icon/freepik_trash.png'}
                            alt="arrow trash icon"
                            title="Empty Matrix"
                        />
                    </div>
                </div>
            </Host>
        );
    }
}

Tunnel.injectProps(PositionSetting, ['matrix', 'setMatrix', 'indexTileMatrix', 'settings']); // eslint-disable-line @stencil/ban-side-effects
