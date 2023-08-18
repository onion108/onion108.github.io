import {escapePlainToHtml} from "../util/escaping";

class TextState {
    sansMode: boolean = false;
    papyMode: boolean = false;
    highlight: boolean = false;
    deathHighlight: boolean = false;
}

export interface Provider {
    provideOne(el: HTMLElement, state: TextState): TextState;
    providerOver(): boolean;
}

export interface Component {
    delayCount: number;
    getProvider?(): Provider;
    action(el: HTMLElement, state: TextState): TextState;
}

class ActionComponent implements Component {
    delayCount = 0;
    #action: (state: TextState) => TextState;
    constructor(action: (state: TextState) => TextState) {
        this.#action = action;
    }
    action(el: HTMLElement, state: TextState): TextState {
        return this.#action(state)
    }
}

class PlainTextComponent implements Component {
    delayCount = 0;
    #data: string;
    constructor(str: string) {
        this.#data = str;
    }
    getProvider(): Provider {
        return new PlainTextProvider(this);
    }

    get data() {
        return this.#data;
    }
    writeContent(el: HTMLElement, state: TextState, content: string) {
        let closeLevel = 0;
        let result = "";

        // Deal with states.
        if (state.highlight) {
            closeLevel += 1;
            result += "<span class=\"highlighted-text\">";
        }
        if (state.deathHighlight) {
            closeLevel += 1;
            result += "<span class=\"charad-text\">";
        }
        if (state.sansMode) {
            closeLevel += 1;
            result += "<span style=\"font-family:'sans', 'Comic Sans MS';\">";
        }
        if (state.papyMode) {
            closeLevel = 1;
            result += "<span style=\"font-family:'papy', 'Papyrus';\">";
        }

        result += escapePlainToHtml(content);

        for (let i = 0; i < closeLevel; i++) {
            result += "</span>"
        }
        el.innerHTML += result;
    }
    action(el: HTMLElement, state: TextState): TextState {
        this.writeContent(el, state, this.#data);
        return state;
    }
}

class PlainTextProvider implements Provider {
    #index: number = 0;
    #component: PlainTextComponent;
    constructor(component: PlainTextComponent) {
        this.#component = component;
    }
    provideOne(el: HTMLElement, state: TextState): TextState {
        if (!this.providerOver()) {
            this.#component.writeContent(el, state, this.#component.data[this.#index]);
            this.#index += 1;
        }
        return state;
    }
    providerOver(): boolean {
        return this.#index >= this.#component.data.length;
    }
}

class DummyProvider implements Provider {
    provideOne(el: HTMLElement, state: TextState): TextState {
        return state;
    }
    providerOver(): boolean {
        return true;
    }
}

class DelayComponent implements Component {
    delayCount: number;
    constructor(delay: number) {
        this.delayCount = delay;
    }
    action(_: HTMLElement, __: TextState): TextState {
        return __;
    }
}

class NewLineComponent implements Component {
    delayCount: number = 0;
    action(el: HTMLElement, state: TextState): TextState {
        el.innerHTML += "<br />"
        return state;
    }
}

export class StyledText {
    #components: Component[] = [];

    /// Parse text into styled text.
    constructor(str: string) {
        console.log(`Parsing string ${str}`);
        let escaping = false;
        let buffer = "";
        for (const i of str) {
            if (!escaping) {
                if (i === "\\") {
                    this.#components.push(new PlainTextComponent(buffer));
                    buffer = "";
                    escaping = true;
                } else {
                    buffer += i;
                }
            } else {
                if (i === "n") {
                    this.#components.push(new NewLineComponent());
                }
                if (i === "{") {
                    this.#components.push(new ActionComponent((state) => {
                        return {
                            ...state,
                            deathHighlight: true,
                        };
                    }));
                }
                if (i === "}") {
                    this.#components.push(new ActionComponent((state) => {
                        return {
                            ...state,
                            deathHighlight: false,
                        };
                    }));
                }
                if (i === "[") {
                    this.#components.push(new ActionComponent((state) => {
                        return {
                            ...state,
                            highlight: true,
                        };
                    }));
                }
                if (i === "]") {
                    this.#components.push(new ActionComponent((state) => {
                        return {
                            ...state,
                            highlight: false,
                        };
                    }));
                }
                if (i === "p") {
                    this.#components.push(new ActionComponent((state) => {
                        return {
                            ...state,
                            papyMode: true,
                        };
                    }));
                }
                if (i === "s") {
                    this.#components.push(new ActionComponent((state) => {
                        return {
                            ...state,
                            sansMode: true,
                        };
                    }));
                }
                if (i === "w") {
                    this.#components.push(new DelayComponent(1));
                }
                if (i === "W") {
                    this.#components.push(new DelayComponent(11));
                }
                if (i === "\\") {
                    this.#components.push(new PlainTextComponent("\\"));
                }
                escaping = false;
            }
        }
        if (buffer !== "") this.#components.push(new PlainTextComponent(buffer));
    }

    /// Render all the contents onto element.
    render(el: HTMLElement) {
        let state = new TextState();
        for (const i of this.#components) {
            state = i.action(el, state);
        }
    }

    /// Typewrite all the content onto element.
    typewrite(el: HTMLElement) {
        let counter = 0;
        let provider: Provider = new DummyProvider();
        let delay = 0;
        let state = new TextState();
        let hd = setInterval(() => {
            if (delay > 0) {
                delay -= 1;
                return;
            }
            if (counter >= this.#components.length && provider.providerOver()) {
                el.setAttribute("data-typewriter-hd", "-1");
                clearInterval(hd);
            }

            if (provider.providerOver()) {
                if (this.#components[counter].getProvider) {
                    provider = this.#components[counter].getProvider();
                    counter += 1;
                    state = provider.provideOne(el, state);
                } else {
                    state = this.#components[counter].action(el, state);
                    delay = this.#components[counter].delayCount;
                    counter += 1;
                }
            } else {
                state = provider.provideOne(el, state);
            }
        }, 70);
        el.setAttribute("data-typewriter-hd", hd.toString());
    }
}