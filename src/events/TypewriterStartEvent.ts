export type TypewriterStartEventArgs = { currentIndex: number, currentDataIndex: number };

export class TypewriterStartEvent extends CustomEvent<TypewriterStartEventArgs> {
    constructor(currentIndex: number, currentDataIndex: number) {
        super("onion:typewrite-start", {
            cancelable: false,
            detail: {
                currentIndex,
                currentDataIndex,
            }
        });
    }
}