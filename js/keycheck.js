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

export function keycheck_onion27() {
    const name = ['2', '7', 'o', 'n', 'i', 'o', 'n'];
    if (findSeq(name)) {
        document.querySelector("[data-name]").style.textDecoration = "underline";
    }
}
