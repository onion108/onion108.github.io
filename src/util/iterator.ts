export class MapIterator<T, U> implements Iterator<U> {
    #original: Iterator<T>;
    #transformer: (T) => U;
    constructor(from: Iterator<T>, transformer: (T) => U) {
        this.#original = from;
        this.#transformer = transformer;
    }
    next(...args: [] | [undefined]): IteratorResult<U, any> {
        let nextValue = this.#original.next();
        return {
            done: nextValue.done,
            value: this.#transformer(nextValue.value),
        };
    }
}

export class MapIteratorProvider<T, U> implements Iterable<U> {
    #original: Iterable<T>;
    #transformer: (T) => U;
    constructor(from: Iterable<T>, transformer: (T) => U) {
        this.#original = from;
        this.#transformer = transformer;
    }
    [Symbol.iterator](): Iterator<U> {
        return new MapIterator(this.#original[Symbol.iterator](), this.#transformer);
    }
}

export function map<T, U, I extends Iterable<T>>(func: (T) => U, iterable: I): Iterable<U> {
    return new MapIteratorProvider(iterable, func);
}

export function toArray<T, I extends Iterable<T>>(iterable: I): T[] {
    let t = [];
    for (const i of iterable) {
        t.push(i);
    }
    return t;
}

export function toString(iterable: Iterable<string>): string {
    let t = "";
    for (const i of iterable) {
        t += i;
    }
    return t;
}
