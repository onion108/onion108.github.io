import pageData from "./page-data.js";

function find_seq(keySeq) {
    if (pageData.keySequence.length < keySeq.length) return;
    for (let i = 0; i < keySeq.length; i++) {
        if (keySeq[keySeq.length-i-1] != pageData.keySequence[pageData.keySequence.length-i-1]) {
            return false;
        }
    }
    return true;
}

function keycheck_onion27() {
    const name = ['2', '7', 'o', 'n', 'i', 'o', 'n'];
    if (find_seq(name)) {
        document.querySelector("[data-name]").style.textDecoration = "underline";
    }
}

function keycheck_benzyl_titanium() {
    const name = ['b', 'e', 'n', 'z', 'y', 'l'];
    if (find_seq(name)) {
        document.querySelector("#benzyl-titanium").innerText = "2enzyl 7itanium";
    }
}

function keycheck_konami_seq() {
    if (find_seq(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'])) {
        document.querySelector("#output").innerText = "You just used the code, right? ";
    }
}

function keycheck_saturday() {
    if (find_seq(['s', 'a', 't', 'u', 'r', 'd', 'a', 'y'])) {
        document.querySelectorAll("[data-sat]").forEach(x => x.removeAttribute("style"));
    }
}

function keycheck_saturday_full() {
    if (find_seq(['Shift', 'S', 'a', 't', 'u', 'r', 'd', 'a', 'y', ' ', 'Shift', 'T', 'a', 's', 'o', 'g', 'a', 'r', 'e'])) {
        if (localStorage.getItem("tvo_state") !== "DUSKBREAKER_STARTUP") {
            document.querySelector("#sat").removeAttribute("style");
            localStorage.setItem("tvo_state", "DUSKBREAKER_STARTUP");
        } else {
            document.querySelector("#sat").setAttribute("style", "display: none;");
            localStorage.removeItem("tvo_state");
        }
    }
}

function keycheck_vivid_stasis() {
    if (find_seq(['v', 'i', 'v', 'i', 'd', '/', 's', 't', 'a', 's', 'i', 's'])) {
        document.querySelector("#fav-game-vs").removeAttribute("style");
    }
}

function keycheck_reload() {
    if (find_seq(['p', 'a', 'r', 'u', 'Enter']) || find_seq(['p', 'a', 'r', 'u', ' ', '-', 'Shift', 'S', 'y', 'u', 'Enter'])) {
        location.reload(true);
    }
}

export default [
    keycheck_onion27,
    keycheck_benzyl_titanium,
    keycheck_konami_seq,
    keycheck_reload,
    keycheck_saturday,
    keycheck_saturday_full,
    keycheck_vivid_stasis,
];

