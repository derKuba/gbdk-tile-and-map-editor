import { Component, Host, h, Prop } from '@stencil/core';

import Tunnel from '../../provider/StateProvider';

enum ACTIONS {
    COPY = 0,
    PASTE = 1,
}

@Component({
    tag: 'mvjp-cp-panel',
    styleUrl: 'cp-panel.css',
    shadow: true,
})
export class CpPanel {
    /**
     *  Set ID of actual matrix to copy
     */
    @Prop() setCopyIndex: Function;

    /**
     *  Paste Action
     */
    @Prop() pasteMatrix: Function;

    private copyOrPaste = action => {
        if (action === ACTIONS.COPY) {
            this.setCopyIndex();
        }
        if (action === ACTIONS.PASTE) {
            this.pasteMatrix();
        }
    };

    render() {
        return (
            <Host>
                <div class="box icon-alignment">
                    <img
                        class="cp-icon"
                        onClick={() => this.copyOrPaste(ACTIONS.COPY)}
                        src={'./assets/icon/freepik_document.png'}
                        alt="arrow turn around icon"
                        title="Copy Matrix"
                    />
                </div>

                <div class="box icon-alignment">
                    <img
                        class="cp-icon"
                        onClick={() => this.copyOrPaste(ACTIONS.PASTE)}
                        src={'./assets/icon/freepik_clipboard.png'}
                        alt="arrow trash icon"
                        title="Paste"
                    />
                </div>
            </Host>
        );
    }
}

Tunnel.injectProps(CpPanel, ['setCopyIndex', 'pasteMatrix']); // eslint-disable-line @stencil/ban-side-effects
