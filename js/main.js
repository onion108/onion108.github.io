import { KEY_SEQUENCE_SIZE } from "./constants.js";
import { EFFECT_TABLE } from "./effects.js";
import KEYCHECK_TABLE from "./keycheck.js";
import pageData from "./page-data.js";

function update() {
    const nodes = document.querySelectorAll("[data-effect]");
    for (const node of nodes) {
        const effect = node.getAttribute("data-effect");
        if (EFFECT_TABLE[effect] === undefined) {
            continue;
        }
        if (node.getAttribute("data-effect-initialized") === null) {
            node.setAttribute("data-effect-initialized", "");
            if (EFFECT_TABLE[effect].start) {
                EFFECT_TABLE[effect].start(node);
            }
        }
        if (EFFECT_TABLE[effect].update) {
            EFFECT_TABLE[effect].update(node);
        }
    }
}

function keycheck() {
    for (const keycheck of KEYCHECK_TABLE) {
        keycheck();
    }
}

window.addEventListener("load", () => {
    pageData.loaded = true;
    document.querySelector("#output").addEventListener('click', () => {
        document.querySelector("#output").innerHTML = "";
    });
    setInterval(update, 16);
});

window.addEventListener("keydown", (e) => {
    pageData.keySequence.push(e.key);
    if (pageData.keySequence.length > KEY_SEQUENCE_SIZE) {
        pageData.keySequence.shift();
    }
    keycheck();
});

