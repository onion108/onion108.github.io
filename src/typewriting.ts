import { TypewriterStartEvent } from "./events/TypewriterStartEvent";
import { dialogs, translateI18N } from "./index";

let indexCounter = 0;
let boringCount = 0;

export function typeWriteOne(el: Element) {
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
    if (a === null) {
        console.error("Cannot read the content!");
        return;
    }
    const oldHd = el.getAttribute("data-typewriter-hd");
    if (oldHd !== "-1") {
        clearInterval(Number.parseInt(oldHd!));
    }
    let typeWriteCount = 0;
    el.innerHTML = '';
    let highlightMode = false;
    let charaMode = false;
    let sansMode = false;
    let papyMode = false;
    let delay = -1;
    document.dispatchEvent(new TypewriterStartEvent(indexCounter, Number.parseInt(el.getAttribute("data-content")!)));
    let hd = setInterval(() => {
        if (delay !== -1) {
            delay -= 1;
            return;
        }
        let currentChar = a[typeWriteCount];
        if (currentChar === "\\") {
            currentChar = a[++typeWriteCount];
            if (currentChar === "n") {
                el.innerHTML += '<br>';
            } else if (currentChar === "\\") {
                el.innerHTML += '\\';
            } else if (currentChar === "[") {
                highlightMode = true;
            } else if (currentChar === "]") {
                highlightMode = false;
            } else if (currentChar === "{") {
                charaMode = true;
            } else if (currentChar === "}") {
                charaMode = false;
            } else if (currentChar === "p") {
                papyMode = true;
            } else if (currentChar === "s") {
                sansMode = true;
            } else if (currentChar === "w") {
                delay = 0;
            } else if (currentChar === "W") {
                delay = 10;
            }
        } else  {
            let renderedChar = "";
            if (highlightMode) {
                renderedChar += "<span class=\"highlighted-text\">";
            } else if (charaMode) {
                renderedChar += "<span class=\"charad-text\">";
            } else {
                renderedChar += "<span>";
            }
            if (sansMode) {
                renderedChar += "<span style=\"font-family:'sans', 'Comic Sans MS';\">";
            } else if (papyMode) {
                renderedChar += "<span style=\"font-family:'papy', 'Papyrus';\">";
            } else {
                renderedChar += "<span>";
            }
            if (currentChar === "&") {
                renderedChar += "&amp;";
            } else if (currentChar === "<") {
                renderedChar += "&lt;";
            } else if (currentChar === ">") {
                renderedChar += "&gt;";
            } else {
                renderedChar += currentChar;
            }
            renderedChar += "</span></span>";
            el.innerHTML += renderedChar;
        }
        typeWriteCount += 1;
        if (typeWriteCount === a.length) {
            clearInterval(hd);
            el.setAttribute("data-typewriter-hd", "-1");
        }
    }, 70);
    el.setAttribute("data-typewriter-hd", hd.toString());
}

// Just a copy from typeWriteOne() with few changes.
export function writeText(el: Element) {
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
    if (a === null) {
        console.error("Cannot read the content!");
        return;
    }
    const oldHd = el.getAttribute("data-typewriter-hd");
    if (oldHd !== "-1") {
        clearInterval(Number.parseInt(oldHd!));
        el.setAttribute("data-typewriter-hd", "-1");
    }
    let typeWriteCount = 0;
    el.innerHTML = '';
    let highlightMode = false;
    let charaMode = false;
    let sansMode = false;
    let papyMode = false;
    while (true) {
        let currentChar = a[typeWriteCount];
        if (currentChar === "\\") {
            currentChar = a[++typeWriteCount];
            if (currentChar === "n") {
                el.innerHTML += '<br>';
            } else if (currentChar === "\\") {
                el.innerHTML += '\\';
            } else if (currentChar === "[") {
                highlightMode = true;
            } else if (currentChar === "]") {
                highlightMode = false;
            } else if (currentChar === "{") {
                charaMode = true;
            } else if (currentChar === "}") {
                charaMode = false;
            } else if (currentChar === "p") {
                papyMode = true;
            } else if (currentChar === "s") {
                sansMode = true;
            }
        } else  {
            let renderedChar = "";
            if (highlightMode) {
                renderedChar += "<span class=\"highlighted-text\">";
            } else if (charaMode) {
                renderedChar += "<span class=\"charad-text\">";
            } else {
                renderedChar += "<span>";
            }
            if (sansMode) {
                renderedChar += "<span style=\"font-family:'sans', 'Comic Sans MS';\">";
            } else if (papyMode) {
                renderedChar += "<span style=\"font-family:'papy', 'Papyrus';\">";
            } else {
                renderedChar += "<span>";
            }
            if (currentChar === "&") {
                renderedChar += "&amp;";
            } else if (currentChar === "<") {
                renderedChar += "&lt;";
            } else if (currentChar === ">") {
                renderedChar += "&gt;";
            } else {
                renderedChar += currentChar;
            }
            renderedChar += "</span></span>";
            el.innerHTML += renderedChar;
        }
        typeWriteCount += 1;
        if (typeWriteCount === a.length) {
            console.log("break! ");
            break;
        }
    }
}

export function startTypewriting() {
    const needToTypewrites = document.querySelectorAll(".typewriter");
    for (const i of needToTypewrites) {
        if (i.getAttribute("data-typewriter-hd") === null) {
            i.setAttribute("data-typewriter-hd", "-1");
        }
        typeWriteOne(i);
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
        // indexCounter += 1;
    }
}