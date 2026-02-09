import { benzyl_titanium_truth } from "./mod.js";
import { get_tip } from "./tips.js";
import { randomInt, randomString } from "./util.js";

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
        },
    },
    "load-tvo": {
        /**
         * @param {HTMLElement} node
         */
        start(node) {
            if (localStorage.getItem("tvo_state") === "DUSKBREAKER_STARTUP") {
                node.removeAttribute("style");
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
                document.querySelector("#benzyl-li").setAttribute(
                    "style",
                    "display: none;",
                );
            }
        },
    },
    "tips": {
        /**
         * @param {HTMLElement} node
         */
        start(node) {
            node.innerText = "Tips: " + get_tip();
            if (localStorage.getItem("tips") === "1") {
                node.removeAttribute("style");
            }
        },
    },
    "tips-hint": {
        /**
         * @param {HTMLElement} node
         */
        start(node) {
            if (localStorage.getItem("tips_triggered") === null && randomInt(0, 200) === 91) {
                node.removeAttribute("style");
            }
        }
    },
};
