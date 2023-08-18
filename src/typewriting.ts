import { TypewriterStartEvent } from "./events/TypewriterStartEvent";
import { dialogs, translateI18N } from "./index";
import {StyledText} from "./text/StyledText";

let indexCounter = 0;
let boringCount = 0;

export function resetTypewriterState() {
    indexCounter = 0;
    boringCount = 0;
}

function getTypewritingText(el: Element) {
    let a: string = "";
    if (indexCounter < dialogs[Number.parseInt(el.getAttribute("data-content")!)].length) {
        a = dialogs[Number.parseInt(el.getAttribute("data-content")!)][indexCounter];
    } else {
        a = translateI18N("onion27.dialog.thats_all");
        boringCount++;
        if (boringCount >= 50) {
            a = translateI18N("onion27.dialog.boring50");
        }
        if (boringCount >= 100) {
            a = translateI18N("onion27.dialog.boring100");
        }
        if (boringCount === 1000) {
            a = translateI18N("onion27.dialog.secret0");
        }
        if (boringCount === 1001) {
            a = translateI18N("onion27.dialog.secret1");
        }
        if (boringCount === 1002) {
            a = translateI18N("onion27.dialog.secret2");
        }
    }
    return a;
}

export function typeWriteOne(el: HTMLElement) {
    let a = getTypewritingText(el);
    if (a === null) {
        console.error("Cannot read the content! ");
        return;
    }

    const oldHd = el.getAttribute("data-typewriter-hd");
    if (oldHd !== "-1") {
        clearInterval(Number.parseInt(oldHd!));
    }
    el.innerHTML = '';
    document.dispatchEvent(new TypewriterStartEvent(indexCounter, Number.parseInt(el.getAttribute("data-content")!)));
    let styled = new StyledText(a);
    styled.typewrite(el);
}

// Directly renders the content onto the typewriter.
export function writeText(el: HTMLElement) {
    let a = getTypewritingText(el);
    if (a === null) {
        console.error("Cannot read the content! ");
        return;
    }

    const oldHd = el.getAttribute("data-typewriter-hd");
    if (oldHd !== "-1") {
        clearInterval(Number.parseInt(oldHd));
        el.setAttribute("data-typewriter-hd", "-1");
    }
    el.innerHTML = '';
    let styled = new StyledText(a);
    styled.render(el);
}

export function startTypewriting() {
    const needToTypewrites = document.querySelectorAll(".typewriter");
    for (const i of needToTypewrites) {
        if (i.getAttribute("data-typewriter-hd") === null) {
            i.setAttribute("data-typewriter-hd", "-1");
        }
        typeWriteOne(i as HTMLElement);
    }
}

export function nextText() {
    if (document.querySelector(".typewriter")?.getAttribute("data-typewriter-hd") === "-1") {
        indexCounter += 1;
        startTypewriting();
    }
}

export function skipText() {
    if (document.querySelector(".typewriter")?.getAttribute("data-typewriter-hd") !== "-1" && document.querySelector(".typewriter")?.getAttribute("data-unskippable") === null) {
        writeText(document.querySelector(".typewriter")!);
    }
}