/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { Component, Host, h, State, Prop } from '@stencil/core';

import { Settings } from '../../models/settingsModel';
import Tunnel from '../../provider/StateProvider';

@Component({
    tag: 'mvjp-settings-ui',
    styleUrl: 'settings.css',
    shadow: true,
})
export class SettingsUI {
    /**
     *   global settings
     */
    @Prop() settings: Settings;

    /**
     *   setter for global settings
     */
    @Prop() setSettings: Function;

    @State() isContentVisible: boolean = false;

    private toggleVisibility = () => {
        this.isContentVisible = !this.isContentVisible;
    };

    private handleChange(event) {
        switch (event.target.name) {
            case 'width':
                this.settings.fieldWidth = parseInt(event.target.value, 10);
                break;
            case 'height':
                this.settings.fieldHeight = parseInt(event.target.value, 10);
                break;

            case 'spriteAmount':
                this.settings.spriteAmount = parseInt(event.target.value, 10);
                break;

            case 'grid':
                this.settings.isGridVisible = event.target.checked;
                break;

            case 'numbers':
                this.settings.isFieldNumberVisible = event.target.checked;
                break;

            default:
                break;
        }
        this.setSettings(this.settings);
    }

    render() {
        const settingsFormVisibleClass = this.isContentVisible ? 'visible' : '';
        return (
            <Host>
                <img
                    class="settingsIcon"
                    onClick={() => this.toggleVisibility()}
                    src={'./assets/icon/freepik_repair.png'}
                    alt="settings icon"
                />

                <div class={`settingsForm ${settingsFormVisibleClass}`}>
                    <h2>Settings</h2>

                    <div class="formLine">
                        <label>
                            Width:
                            <input
                                name="width"
                                type="number"
                                min="1"
                                max="99"
                                value={this.settings.fieldWidth}
                                onInput={event => this.handleChange(event)}
                            />
                        </label>
                        <span> x </span>
                        <label>
                            Height:
                            <input
                                name="height"
                                type="number"
                                min="1"
                                max="99"
                                onInput={event => this.handleChange(event)}
                                value={this.settings.fieldHeight}
                            />
                        </label>
                    </div>

                    <div class="formLine">
                        <label>
                            Number of Tiles:
                            <input
                                name="spriteAmount"
                                type="number"
                                min="1"
                                max="99"
                                onInput={event => this.handleChange(event)}
                                value={this.settings.spriteAmount}
                            />
                        </label>
                    </div>

                    <div class="formLine">
                        <label>
                            Grid:
                            <input
                                name="grid"
                                type="checkbox"
                                value="isGridVisible"
                                onInput={event => this.handleChange(event)}
                                checked={this.settings.isGridVisible}
                            />
                        </label>

                        <label>
                            Numbers:
                            <input
                                name="numbers"
                                type="checkbox"
                                value="isFieldNumberVisible"
                                onInput={event => this.handleChange(event)}
                                checked={this.settings.isFieldNumberVisible}
                            />
                        </label>
                    </div>
                </div>
            </Host>
        );
    }
}
Tunnel.injectProps(SettingsUI, ['settings', 'setSettings']); // eslint-disable-line @stencil/ban-side-effects
