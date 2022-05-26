export declare class WebpackReplaceChunksNamePlugin {
    replaceChunks: OptionsProps[];
    constructor(options: OptionsProps[]);
    apply(compiler: any): void;
}
export default WebpackReplaceChunksNamePlugin;

export interface OptionsProps {
    origin: string;
    replace: string;
}
