import pageData from "./page-data.js";

function findSeq(keySeq) {
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
    if (findSeq(name)) {
        document.querySelector("[data-name]").style.textDecoration = "underline";
    }
}

function keycheck_benzyl_titanium() {
    const name = ['b', 'e', 'n', 'z', 'y', 'l'];
    if (findSeq(name)) {
        document.querySelector("#benzyl-titanium").innerText = "2enzyl 7itanium";
    }
}

function keycheck_konami_seq() {
    console.log(pageData.keySequence);
    if (findSeq(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'])) {
        document.querySelector("#output").innerText = "You just used the code, right? ";
    }
}

export default [
    keycheck_onion27,
    keycheck_benzyl_titanium,
    keycheck_konami_seq,
];

