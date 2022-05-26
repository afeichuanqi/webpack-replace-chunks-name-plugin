import { OptionsProps } from '../types';

class WebpackReplaceChunksNamePlugin {
    replaceChunks: OptionsProps[] = [];
    constructor(options: OptionsProps[]) {
        if (!Array.isArray(options)) {
            throw new Error('must be an array');
        }
        if (!options.every((item) => item.origin && item.replace)) {
            throw new Error('members must contain {orgin: string, replace: string}');
        }
        this.replaceChunks = options;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('replaceChunksName', (compilation) => {
            compilation.hooks.shouldGenerateChunkAssets.tap(
                'replaceChunksName',
                () => {
                    compilation.chunks.forEach((item) => {
                        const _findIndex = this.replaceChunks.findIndex(
                            (replaceChunk) => replaceChunk.origin === item.name,
                        );
                        if (_findIndex !== -1) {
                            item.name = this.replaceChunks[_findIndex].replace;
                        }
                    });
                },
            );
        });
    }
}
export default WebpackReplaceChunksNamePlugin
