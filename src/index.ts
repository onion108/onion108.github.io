import { dialogsI18N, otherI18N } from "./resources";
import { resetTypewriterState, startTypewriting, skipText, nextText } from "./typewriting";
import { TypewriterStartEvent, TypewriterStartEventArgs } from "./events/TypewriterStartEvent";
import { VERSION } from "./metadata";

export let experimentFeatures = {
    skippableText: true,
};

export let dialogs: string[][] = null;

export let strings: Record<string, string> = null;

function isWolfysNebellBirthday() {
    let date = new Date();
    return (date.getDate() === 27 && date.getMonth() === 11);
}

function registerTriggers() {
    const triggers = document.querySelectorAll(".trigger");
    for (const i of triggers) {
        if (i.hasAttribute("data-disappear-on-wolfbirth") && isWolfysNebellBirthday()) {
            (i as HTMLElement).style.display = "none";
            continue;
        }
        if (i.getAttribute("data-nc")) {
            (i as HTMLElement).onclick = () => {
                if (i.getAttribute("data-nc-wolfbirth")) {
                    if (isWolfysNebellBirthday()) {
                        document.querySelector(".typewriter")?.setAttribute("data-content", i.getAttribute("data-nc-wolfbirth")!);
                        resetTypewriterState();
                        startTypewriting();
                    } else {
                        document.querySelector(".typewriter")?.setAttribute("data-content", i.getAttribute("data-nc")!);
                        resetTypewriterState();
                        startTypewriting();
                    }
                } else {
                    document.querySelector(".typewriter")?.setAttribute("data-content", i.getAttribute("data-nc")!);
                    resetTypewriterState();
                    startTypewriting();
                }
            }
        }
    }

    const nextButton = document.querySelector("div#next") as HTMLDivElement;
    nextButton.onclick = () => {
        nextText();
    };

    const skipButton = document.querySelector("div#skip") as HTMLDivElement;
    skipButton.onclick = () => {
        skipText();
    };

    window.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "z") {
            nextText();
        }
        if (experimentFeatures.skippableText) {
            if (e.key === "x") {
                skipText();
            }
        }
    };

}

const typewriteTriggers: Record<number, (e: TypewriterStartEvent) => void> = {
    27: (e) => {
        if (e.detail.currentIndex === 3) {
            experimentFeatures.skippableText = true;
            dialogs[13] = ["* It's added now. Press [X] to test. "];
            (document.querySelector("[data-x028D]") as HTMLElement).style.display = "none";
        }
    }
};

function registerOtherEventListeners() {
    document.addEventListener("onion:typewrite-start", (e) => {
        let event = e as TypewriterStartEvent;
        let idx = event.detail.currentDataIndex;
        if (typewriteTriggers[idx] !== undefined) {
            typewriteTriggers[idx](event);
        }
    })
}

export function translateI18N(key: string): string {
    if (strings[key] !== undefined) {
        return strings[key];
    } else {
        return key;
    }
}
export function loadLang(langName: string) {
    dialogs = dialogsI18N[langName] !== undefined ? dialogsI18N[langName] : dialogsI18N["en_US"];
    strings = otherI18N[langName] !== undefined ? otherI18N[langName] : otherI18N["en_US"];
}

export function updateVisualI18n() {
    let elementsToUpdate = document.querySelectorAll("[data-i18n]");
    for (const i of elementsToUpdate) {
        let translateKey = i.getAttribute("data-i18n");
        if (strings[translateKey] !== undefined) {
            console.log(`Replacing ${i.innerHTML} with ${strings[translateKey]}`)
            i.innerHTML = strings[translateKey];
        } else {
            console.warn(`Cannot find translation key ${translateKey}`)
        }
    }
}

function setupResources() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    let languageToLoad = "en_US";
    if (params.get("lang") !== null) {
        languageToLoad = params.get("lang");
    }

    loadLang(languageToLoad);
    updateVisualI18n();
    if (isWolfysNebellBirthday()) {
        dialogs[0] = [translateI18N("onion27.special.rip_wolfys"), ...dialogs[0]];
        document.body.style.filter = "grayscale(1)";
        document.body.style.setProperty("--highlight-color", "rgb(124, 124, 0)");
    }
}

function updateOtherVisualElements() {
    document.querySelector("#version_number").innerHTML = VERSION;
}

window.onload = () => {
    setupResources();
    updateOtherVisualElements();
    registerTriggers();
    registerOtherEventListeners();
    startTypewriting();
};

