import pageData from "./page-data.js";
import { benzyl_titanium_truth } from "./mod.js";

function find_seq(keySeq) {
    if (pageData.keySequence.length < keySeq.length) return;
    for (let i = 0; i < keySeq.length; i++) {
        if (
            keySeq[keySeq.length - i - 1] !=
                pageData.keySequence[pageData.keySequence.length - i - 1]
        ) {
            return false;
        }
    }
    return true;
}

function keycheck_onion27() {
    const name = ["2", "7", "o", "n", "i", "o", "n"];
    if (find_seq(name)) {
        document.querySelector("[data-name]").style.textDecoration =
            "underline";
    }
}

function keycheck_benzyl_titanium() {
    const name = ["b", "e", "n", "z", "y", "l"];
    if (find_seq(name)) {
        const el = document.querySelector("#benzyl-titanium");
        if (el) el.innerText = "2enzyl 7itanium";
    }
}

function keycheck_mbti() {
    if (find_seq(["m", "b", "t", "i"])) {
        const el = document.querySelector("#mbti");
        if (el) el.removeAttribute("style");
    }
}

function keycheck_konami_seq() {
    if (
        find_seq([
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "b",
            "a",
        ])
    ) {
        document.querySelector("#output").innerText =
            "You just used the code, right? ";
    }
}

function keycheck_saturday() {
    if (find_seq(["s", "a", "t", "u", "r", "d", "a", "y"])) {
        document.querySelectorAll("[data-sat]").forEach((x) =>
            x.removeAttribute("style")
        );
    }
}

function keycheck_saturday_full() {
    if (
        find_seq([
            "Shift",
            "S",
            "a",
            "t",
            "u",
            "r",
            "d",
            "a",
            "y",
            " ",
            "Shift",
            "T",
            "a",
            "s",
            "o",
            "g",
            "a",
            "r",
            "e",
        ])
    ) {
        if (localStorage.getItem("tvo_state") !== "DUSKBREAKER_STARTUP") {
            document.querySelector("#sat").removeAttribute("style");
            localStorage.setItem("tvo_state", "DUSKBREAKER_STARTUP");
        } else {
            document.querySelector("#sat").setAttribute(
                "style",
                "display: none;",
            );
            localStorage.removeItem("tvo_state");
        }
    }
}

function keycheck_vivid_stasis() {
    if (
        find_seq(["v", "i", "v", "i", "d", "/", "s", "t", "a", "s", "i", "s"])
    ) {
        document.querySelector("#fav-game-vs").removeAttribute("style");
    }
}

function keycheck_reload() {
    if (
        find_seq(["p", "a", "r", "u", "Enter"]) ||
        find_seq([
            "p",
            "a",
            "r",
            "u",
            " ",
            "-",
            "Shift",
            "S",
            "y",
            "u",
            "Enter",
        ])
    ) {
        location.reload(true);
    }
}

function keycheck_x11() {
    if (find_seq(["x", "1", "1"])) {
        document.querySelector("#hate-x11").removeAttribute("style");
        document.querySelector("#like-wayland").removeAttribute("style");
    }
}

function keycheck_tips() {
    if (find_seq(["t", "i", "p", "s"])) {
        if (localStorage.getItem("tips") === null) {
            document.querySelector("#tips").removeAttribute("style");
            localStorage.setItem("tips", "1");
            localStorage.getItem("tips_triggered", "1");
        } else {
            document.querySelector("#tips").setAttribute(
                "style",
                "display: none;",
            );
            localStorage.removeItem("tips");
        }
    }
}

function keycheck_nvim_config() {
    if (find_seq(["n", "v", "i", "m", "c", "o", "n", "f", "i", "g"])) {
        const el = document.querySelector("#nvim-config");
        if (el) el.removeAttribute("style");
    }
}

function keycheck_benzyl_titanium_truth() {
    if (
        find_seq([
            "b",
            "e",
            "n",
            "z",
            "y",
            "l",
            "t",
            "i",
            "t",
            "a",
            "n",
            "i",
            "u",
            "m",
            "t",
            "r",
            "u",
            "t",
            "h",
        ])
    ) {
        const truth_level = localStorage.getItem("benzyl_titanium_truth");
        if (truth_level === null) {
            benzyl_titanium_truth();
            localStorage.setItem("benzyl_titanium_truth", "1");
        } else if (truth_level === "1") {
            document.querySelector("#benzyl-li").setAttribute(
                "style",
                "display: none;",
            );
            localStorage.setItem("benzyl_titanium_truth", "2");
        }
    }
}

function keycheck_plaudite() {
    if (find_seq(["g", "o", "o", "d", "n", "i", "g", "h", "t"])) {
        window.location.href = "/plaudite";
    }
}

export default [
    keycheck_onion27,
    keycheck_benzyl_titanium,
    keycheck_benzyl_titanium_truth,
    keycheck_konami_seq,
    keycheck_reload,
    keycheck_saturday,
    keycheck_saturday_full,
    keycheck_vivid_stasis,
    keycheck_x11,
    keycheck_tips,
    keycheck_mbti,
    keycheck_nvim_config,
    keycheck_plaudite,
];
