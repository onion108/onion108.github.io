import { randomString } from "./util.js";

export const EFFECT_TABLE = {
    "censored": {
        /**
         * @param {HTMLElement} node
         */
        start(node) {
            node.style.setProperty("font-family", "Liberation Mono");
            node.style.setProperty("display", "inline-block");
        },
        /**
         * @param {Element} node
         */
        update(node) {
            const original = node.innerText;
            node.innerText = randomString(original.length);
        }
    },
};
