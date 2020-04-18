import { Component, h, Prop } from '@stencil/core';
import { convertColorCodeMatrixToHEXLine } from '../../../utils/convertColourCodeMatrixToHex';

import { createCTemplatesWeb, createCTemplatesFile } from './export-code-output.utils';

@Component({
    tag: 'mvjp-export-code-output',
    styleUrl: 'export-code-output.css',
    shadow: false,
})
export class ExportCodeOutput {
    /**
     *  matrix to export
     */
    @Prop() fields: number[][][];

    /**
     *  navigate through overlay
     */
    @Prop() navigateTo: Function;

    private handleClick = () => {
        this.navigateTo();
    };

    private convertArrayToGbdkCompatibelString = (selectedFields: number[][][]) => {
        return selectedFields.map((line: number[][]) => convertColorCodeMatrixToHEXLine(line));
    };

    private createDownload = (content, filename) => {
        const contentType = 'application/octet-stream';
        const a = document.createElement('a');
        const blob = new Blob([content], { type: contentType });
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    };

    private downLoadFiles = cTemplatesFile => {
        this.createDownload(cTemplatesFile.main, 'Sprites.c');
        this.createDownload(cTemplatesFile.header, 'Sprites.h');
    };

    render() {
        const convertedLines = this.convertArrayToGbdkCompatibelString(this.fields);
        const cTemplates = createCTemplatesWeb(convertedLines);
        const cTemplatesFile = createCTemplatesFile(convertedLines);

        return (
            <div>
                <h1>Code Output</h1>

                <div class="codeblock">
                    <div innerHTML={cTemplates.main}></div>
                </div>

                <hr />

                <div class="codeblock">
                    <div innerHTML={cTemplates.header}></div>
                </div>

                <hr />

                <div class="buttonLine">
                    <button onClick={this.handleClick} class="secondary">
                        {' '}
                        Back{' '}
                    </button>
                    <button onClick={() => this.downLoadFiles(cTemplatesFile)} class="primary">
                        {' '}
                        Save as File{' '}
                    </button>
                </div>
            </div>
        );
    }
}
