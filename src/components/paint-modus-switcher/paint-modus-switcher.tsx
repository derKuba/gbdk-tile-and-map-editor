import { Component, h, State, Prop } from '@stencil/core';

import { PaintModus } from '../../models/paintModus';

import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-paint-modus-switcher',
    styleUrl: 'paint-modus-switcher.css',
    shadow: true,
})
export class PaintModusSwitcher {
    @State() paintModus: PaintModus = PaintModus.BRUSH;

    /**
     *   setter of paintmodus
     */
    @Prop() setPaintModus: Function;

    private changeModus = newModus => {
        this.paintModus = newModus;
        this.setPaintModus(newModus);
    };

    render() {
        return (
            <div class="paint-checkbox">
                <label>
                    <input
                        type="radio"
                        name="brush"
                        value={PaintModus.BRUSH}
                        checked={this.paintModus === PaintModus.BRUSH}
                        onClick={() => this.changeModus(PaintModus.BRUSH)}
                    />
                    <img class="icon" src={'./assets/icon/freepik_paintbrush.png'} alt="brush icon" />
                </label>

                <label>
                    <input
                        type="radio"
                        name="bucket"
                        value={PaintModus.BUCKET}
                        checked={this.paintModus === PaintModus.BUCKET}
                        onClick={() => this.changeModus(PaintModus.BUCKET)}
                    />
                    <img class="icon" src={'./assets/icon/freepik_paint_bucket.png'} alt="bucket icon" />
                </label>
            </div>
        );
    }
}

Tunnel.injectProps(PaintModusSwitcher, ['setPaintModus']); // eslint-disable-line @stencil/ban-side-effects
