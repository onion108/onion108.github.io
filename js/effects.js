import { benzyl_titanium_truth } from "./mod.js";
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
    "load-tvo": {
        /**
         * @param {HTMLElement} node
         */
        start(node) {
            if (localStorage.getItem("tvo_state") === "DUSKBREAKER_STARTUP") {
                node.removeAttribute("style")
            }
        },
    },
    "bt-truth": {
        /**
         * @param {HTMLElement} node
         */
        start(node) {
            const truth_level = localStorage.getItem("benzyl_titanium_truth");
            if (truth_level === "1") {
                benzyl_titanium_truth();
            } else if (truth_level === "2") {
                document.querySelector("#benzyl-li").setAttribute("style", "display: none;");
            }
        },
    },
};
