import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
    shadow: true,
})
export class AppHome {
    render() {
        return (
            <div class="content">
                <mvjp-settings-ui />

                <div class="work-panel">
                    <mvjp-color-chooser></mvjp-color-chooser>
                    <mvjp-paint-modus-switcher />
                </div>

                <div class="paint-field">
                    <mvjp-canvas-matrix></mvjp-canvas-matrix>
                    <div class="tool-box">
                        <mvjp-preview size="s" />
                        <mvjp-preview-wall />
                        <mvjp-position-setting />
                        <mvjp-cp-panel />
                    </div>
                </div>

                <div class="center">
                    <mvjp-sprite-number-switcher></mvjp-sprite-number-switcher>
                </div>

                <div class="center">
                    <mvjp-export-button></mvjp-export-button>
                    <mvjp-modal>
                        <mvjp-export-modal-content />
                    </mvjp-modal>
                </div>
            </div>
        );
    }
}
