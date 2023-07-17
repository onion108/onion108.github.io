/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events/TypewriterStartEvent.ts":
/*!********************************************!*\
  !*** ./src/events/TypewriterStartEvent.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TypewriterStartEvent: () => (/* binding */ TypewriterStartEvent)\n/* harmony export */ });\nclass TypewriterStartEvent extends CustomEvent {\n    constructor(currentIndex, currentDataIndex) {\n        super(\"onion:typewrite-start\", {\n            cancelable: false,\n            detail: {\n                currentIndex,\n                currentDataIndex,\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://github_homepage/./src/events/TypewriterStartEvent.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialogs: () => (/* binding */ dialogs),\n/* harmony export */   experimentFeatures: () => (/* binding */ experimentFeatures),\n/* harmony export */   loadLang: () => (/* binding */ loadLang),\n/* harmony export */   strings: () => (/* binding */ strings),\n/* harmony export */   translateI18N: () => (/* binding */ translateI18N),\n/* harmony export */   updateVisualI18n: () => (/* binding */ updateVisualI18n)\n/* harmony export */ });\n/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources */ \"./src/resources.ts\");\n/* harmony import */ var _typewriting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typewriting */ \"./src/typewriting.ts\");\n\n\nlet experimentFeatures = {\n    skippableText: true,\n};\nlet indexCounter = 0;\nlet boringCount = 0;\nlet dialogs = null;\nlet strings = null;\nfunction isWolfysNebellBirthday() {\n    let date = new Date();\n    return date.getDate() === 27 && date.getMonth() === 11;\n}\nfunction registerTriggers() {\n    const triggers = document.querySelectorAll(\".trigger\");\n    for (const i of triggers) {\n        if (i.hasAttribute(\"data-disappear-on-wolfbirth\") && isWolfysNebellBirthday()) {\n            i.style.display = \"none\";\n            continue;\n        }\n        if (i.getAttribute(\"data-nc\")) {\n            i.onclick = () => {\n                var _a, _b, _c;\n                if (i.getAttribute(\"data-nc-wolfbirth\")) {\n                    if (isWolfysNebellBirthday()) {\n                        (_a = document.querySelector(\".typewriter\")) === null || _a === void 0 ? void 0 : _a.setAttribute(\"data-content\", i.getAttribute(\"data-nc-wolfbirth\"));\n                        indexCounter = 0;\n                        boringCount = 0;\n                        (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.startTypewriting)();\n                    }\n                    else {\n                        (_b = document.querySelector(\".typewriter\")) === null || _b === void 0 ? void 0 : _b.setAttribute(\"data-content\", i.getAttribute(\"data-nc\"));\n                        indexCounter = 0;\n                        boringCount = 0;\n                        (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.startTypewriting)();\n                    }\n                }\n                else {\n                    (_c = document.querySelector(\".typewriter\")) === null || _c === void 0 ? void 0 : _c.setAttribute(\"data-content\", i.getAttribute(\"data-nc\"));\n                    indexCounter = 0;\n                    boringCount = 0;\n                    (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.startTypewriting)();\n                }\n            };\n        }\n    }\n    const nextButton = document.querySelector(\"div#next\");\n    nextButton.onclick = () => {\n        (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.nextText)();\n    };\n    const skipButton = document.querySelector(\"div#skip\");\n    skipButton.onclick = () => {\n        (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.skipText)();\n    };\n    window.onkeydown = (e) => {\n        if (e.key === \"z\") {\n            (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.nextText)();\n        }\n        if (experimentFeatures.skippableText) {\n            if (e.key === \"x\") {\n                (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.skipText)();\n            }\n        }\n    };\n}\nconst typewriteTriggers = {\n    27: (e) => {\n        if (e.detail.currentIndex === 3) {\n            experimentFeatures.skippableText = true;\n            dialogs[13] = [\"* It's added now. Press [X] to test. \"];\n            document.querySelector(\"[data-x028D]\").style.display = \"none\";\n        }\n    }\n};\nfunction registerOtherEventListeners() {\n    document.addEventListener(\"onion:typewrite-start\", (e) => {\n        let event = e;\n        let idx = event.detail.currentDataIndex;\n        if (typewriteTriggers[idx] !== undefined) {\n            typewriteTriggers[idx](event);\n        }\n    });\n}\nfunction translateI18N(key) {\n    if (strings[key] !== undefined) {\n        return strings[key];\n    }\n    else {\n        return key;\n    }\n}\nfunction loadLang(langName) {\n    dialogs = _resources__WEBPACK_IMPORTED_MODULE_0__.dialogsI18N[langName] !== undefined ? _resources__WEBPACK_IMPORTED_MODULE_0__.dialogsI18N[langName] : _resources__WEBPACK_IMPORTED_MODULE_0__.dialogsI18N[\"en_US\"];\n    strings = _resources__WEBPACK_IMPORTED_MODULE_0__.otherI18N[langName] !== undefined ? _resources__WEBPACK_IMPORTED_MODULE_0__.otherI18N[langName] : _resources__WEBPACK_IMPORTED_MODULE_0__.otherI18N[\"en_US\"];\n}\nfunction updateVisualI18n() {\n    let elementsToUpdate = document.querySelectorAll(\"[data-i18n]\");\n    for (const i of elementsToUpdate) {\n        let translateKey = i.getAttribute(\"data-i18n\");\n        if (strings[translateKey] !== undefined) {\n            console.log(`Replacing ${i.innerHTML} with ${strings[translateKey]}`);\n            i.innerHTML = strings[translateKey];\n        }\n        else {\n            console.warn(`Cannot find translation key ${translateKey}`);\n        }\n    }\n}\nfunction setupResources() {\n    const url = new URL(window.location.href);\n    const params = url.searchParams;\n    let languageToLoad = \"en_US\";\n    if (params.get(\"lang\") !== null) {\n        languageToLoad = params.get(\"lang\");\n    }\n    loadLang(languageToLoad);\n    updateVisualI18n();\n    if (isWolfysNebellBirthday()) {\n        dialogs[0] = [translateI18N(\"onion27.special.rip_wolfys\"), ...dialogs[0]];\n        document.body.style.filter = \"grayscale(1)\";\n        document.body.style.setProperty(\"--highlight-color\", \"rgb(124, 124, 0)\");\n    }\n}\nwindow.onload = () => {\n    setupResources();\n    registerTriggers();\n    registerOtherEventListeners();\n    (0,_typewriting__WEBPACK_IMPORTED_MODULE_1__.startTypewriting)();\n};\n\n\n//# sourceURL=webpack://github_homepage/./src/index.ts?");

/***/ }),

/***/ "./src/resources.ts":
/*!**************************!*\
  !*** ./src/resources.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialogsI18N: () => (/* binding */ dialogsI18N),\n/* harmony export */   otherI18N: () => (/* binding */ otherI18N)\n/* harmony export */ });\nconst dialogsI18N = {\n    \"en_US\": [\n        [\"* Welcome to \\\\[27Onion's Website\\\\]! \", \"* Choose an \\\\[option\\\\]. \"],\n        [\n            \"* Oh? About me?\",\n            \"* My name is \\\\[27Onion\\\\].\",\n            \"* My Github account is called onion108.\\\\n* You can search it.\"\n        ],\n        [\n            \"* I'm learning \\\\[Rust\\\\] these days.\\\\n* It's our responsibility to rewrite \\\\[everything\\\\] in \\\\[Rust\\\\]!!! Ooh-hoo.\",\n            \"* I can also write Golang, C, C++, Java, Kotlin, C# and more.\",\n            \"* You see, the website is written in \\\\[Typescript\\\\].\",\n        ],\n        [\n            \"* H3Y!!!! EVERY!!!!\",\n            \"* I'm [[27Onion G. 27Onion]]!!!!!\",\n            \"* Oh you the [[$4.99 Little Sponge]]!\",\n            \"* You need some\\\\n* something\",\n            \"* Make you [[BIG]]!! Make me [[BIG]]!!!\",\n            \"* [[Hyperlink Blocked]].\",\n        ],\n        [\n            \"* Oh! I've got a lot of \\\\[friends\\\\].\",\n            \"* Yeah, you can be one, too!!!! I mean.\",\n        ],\n        [\n            \"* ...\",\n            \"* I \\\\[had\\\\] one...\",\n            \"* But... but she...\",\n            \"* ...\",\n            \"* Ft=mv...\",\n            \"* (Please... don't... I'm so afraid... )\",\n            \"* \\\\{&@#%%$^%$@&^%$_msg_6_$&^%*!@&^%$*#\\\\}\",\n            \"* ...\",\n            \"* I'm sorry.\",\n            \"* Forget it.\",\n            \"* \\\\W. \\\\W. \\\\W. \",\n            \"* Don't worry about me! \",\n            \"* I still have \\\\[Yuhang Hu\\\\]. I haven't lost everything. \\\\n* Be positive, my friend! \",\n        ],\n        [\n            \"* [DELETED]\",\n        ],\n        [\n            \"* Yes, I'm fine! Thanks. \",\n        ],\n        [\n            \"* ???\",\n            \"* ?????\",\n            \"* ??????????????????????????\",\n            \"* What\",\n            \"* the\",\n            \"* fuck\",\n        ],\n        [\n            \"* \\\\[Dec 27, 2007\\\\]. And \\\\{Mar 5, 2021\\\\}.\",\n            \"* \\\\[Jan 13\\\\] as well. \",\n        ],\n        [\n            \"* \\\\[Undertale\\\\], \\\\[Deltarune\\\\] o'course. \",\n            \"* Oh, and \\\\[Minecraft\\\\]. \",\n            \"* \\\\[Super Mario Bros\\\\] looks great, but I can never play to the end.\",\n        ],\n        [\n            \"* So you're asking my \\\\[soul\\\\]? \",\n            \"* Nothing special. I'm just a monster looks like a human. \",\n            \"* My soul is half white & half black. \",\n            \"* As for details: The left half of my soul is black and the right half is white. \",\n            \"* Attention. My soul is an upside-down heart, since I'm not a human at all. \",\n            \"* I have \\\\{Determination\\\\}. \",\n        ],\n        [\n            \"* ...?\",\n            \"* Ehh... Nothing. \",\n            \"* You can a-ask me everythin' in the o-options down he-here! \",\n            \"* I have no-nothing to hi-hide. \"\n        ],\n        [\n            \"* We are trying to add this feature. \",\n            \"* But first I need to read this code from months ago. \",\n            \"* It seems that I cannot understand it anymore. \",\n        ],\n        [\n            \"* Really? \\\\n* Thank you! \",\n            \"* If you really like it, I may want to make a \\\\[framework\\\\] of it and publish it. \",\n            \"* The source code of this website is \\\\[in a mess\\\\] 'cause I'm not taking it seriously. \",\n            \"* wwwwwwww\",\n        ],\n        [\n            \"* We-well, that's ok.\",\n            \"* Everybody have their own favorites, I mean. \",\n        ],\n        [\n            \"* Yes, I can speak Chinese. \",\n            \"* 我只是懒得做中文的本地化而已。\\\\n* (For English speakers: I'm just too lazy to do the localization for Chinese. )\",\n            \"* 如果你开发过程序，你应该知道\\\\[本地化\\\\]是一件很麻烦的事情。\\\\n* (For English speakers: You should know that it's very hard to do \\\\[localizations\\\\] if you've developed applications. )\",\n        ],\n        [\n            \"* I felt lost...\",\n            \"* ...\",\n            \"* DARKNESS...\",\n            \"* SADNESS...\",\n            \"* \\\\{DEATH\\\\}.\",\n            \"* \\\\{KILL\\\\} ME. PLEASE...\",\n        ],\n        [\n            \"* No. I'm not using any frameworks. \",\n            \"* It's in 100% \\\\[Vanilla Typescript\\\\]. \",\n            \"* I love the \\\\[static type system\\\\]. \",\n            \"* If you mean the \\\\[typewriter system\\\\], I just want to say, it's all by myself. \",\n        ],\n        [\n            \"* I've just done some \\\\[parse\\\\] works. \",\n            \"* As you see, the \\\\[highlighted codes\\\\] are in the format like this: \\\\n* \\\"\\\\\\\\\\\\\\\\[Hightlighted Text\\\\\\\\\\\\\\\\]\\\"\",\n            \"* And I just did a little parse. \",\n        ],\n        [\n            \"* (Queen-styled Laugh)\",\n            \"* Oh\",\n            \"* LMAO\",\n            \"* I Am Known As Serial Number \\\\[2A7MOLNKIAOVNE\\\\]\",\n            \"* Or For Short 27Onion\",\n            \"* Are You Satisfied With It\",\n            \"* LMAO\",\n            \"* Well You Seems Really Like It\",\n            \"* Don't You\",\n            \"* Well Have Fun\",\n            \"* I'm Gotta Go LMAO\",\n        ],\n        [\n            \"\\\\s* hey kid.\",\n            \"\\\\s* listen. \",\n            \"\\\\s* have you ever seen a \\\\[flowey that can speak\\\\]?\",\n            \"\\\\s* yes. that is it.\",\n            \"\\\\s* the \\\\[echo flower\\\\].\",\n            \"\\\\s* well i'm goin' to sleep.\",\n            \"\\\\s* good luck, kid. \",\n        ],\n        [\n            \"\\\\pHEY HUMAN!!! IT'S ME!! THE GREAT 27ONION!!\",\n            \"\\\\pI'VE BROUGHT MY BEST SPAGHETTI FOR YOU!!\",\n            \"\\\\pTHE SPAGHETTI IS VERY GREAT! IT CAN MAKE YOU-\",\n            \"* ...[[Big]]! Make me [[Big]]!\",\n            \"* And [[Desert you]]!!!\",\n            \"\\\\pWHAT'S THAT? WELL, ANYWAY!!I'LL NEVER-\",\n            \"* [[Gonna Give You Up]]~ \",\n            \"\\\\pHEY YOU! WHAT ARE YOU DOING HERE!!\",\n            \"* Woah!! AR3N'T you the \",\n            \"* Light-n3R!! Hey hey hey!!!\",\n            \"\\\\pNYEH? LIGHTN3R? WHO IS LIGHTN3R?\",\n            \"* You the [[$4.99 Little Sponges]]!!\",\n            \"* You must N33D some [[Hyperlink Blocked]].\",\n            \"* Hahahaha! [[Hyperlink Blocked]]!!\",\n            \"\\\\pTHE GUY MUST BE CRAZY.\",\n            \"* (You nodded your head to show you're agree with her.)\",\n            \"* Oh\",\n            \"* LMAO\",\n            \"* I Just Met A Flower\",\n            \"* It Said\",\n            \"* Error\",\n            \"* LMAO\",\n            \"* It's Just Very Funny LMAO\",\n            \"\\\\pWOWIE! SO MANY PEOPLE HERE!\",\n            \"\\\\pWELL, HUMAN-\",\n            \"\\\\pI'M GOTTA GO NOW!!! CALL ME IF YOU WANT!!\",\n            \"* Good Bye My Sweetie LOL\",\n            \"* (Click...) \",\n        ],\n        [\n            \"* My gender? \",\n            \"* I am a \\\\[girl\\\\], o'course. \",\n            \"* Any problems here? \",\n            \"* Oh... Ok. I know what you want to say. \",\n            \"* Yes I'm \\\\[MtF\\\\]. \",\n            \"* But it doesn't influence anything! \",\n        ],\n        [\n            \"* Yes... \",\n            \"* That's \\\\[Wolfys Nebell\\\\]...\",\n            \"* ... \",\n        ],\n        [\n            \"* \\\\[Today\\\\]. And \\\\{Mar 5, 2021\\\\}.\",\n        ],\n        [\n            \"* I'm sorry... \",\n            \"* But you're not \\\\[Wolfys Nebell\\\\]. \",\n        ],\n        [\n            \"* What? You really want it? \",\n            \"* Ok, I can add this feature in seconds... I guess... \",\n            \"* Please wait for a while.\\\\W.\\\\W. \\\\W\",\n            \"* It's done now! \",\n            \"* Test it. \",\n        ],\n        [\n            \"* If you mean the alive one, it's currently, without doubt, \\\\[Yuhang Hu\\\\].\",\n            \"* \\\\[Wolfys Nebell\\\\] IS important, but...\",\n            \"* Life is still going on, y'know. \\\\n* Life is still \\\\[GOING ON\\\\]...\",\n            \"* Well, \\\\[Yuhang Hu\\\\] is now my most-trusted friend.\\\\n* ...in those who are still alive. \",\n        ],\n    ],\n};\nconst otherI18N = {\n    \"en_US\": {\n        \"onion27.question.0\": \"About you?\",\n        \"onion27.question.1\": \"What languages you are using?\",\n        \"onion27.question.2\": \"Spamton-like speak?\",\n        \"onion27.question.3\": \"Your friend? 114514\",\n        \"onion27.question.4\": \"You TRUE friend?\",\n        \"onion27.question.5\": \"How are you?\",\n        \"onion27.question.6\": \"*Hug*\",\n        \"onion27.question.7\": \"The most special day for you? \",\n        \"onion27.question.8\": \"Video games you like?\",\n        \"onion27.question.9\": \"Your Undertale soul?\",\n        \"onion27.question.10\": \"Are you hiding something?\",\n        \"onion27.question.11\": \"I love the style of this webpage.\",\n        \"onion27.question.12\": \"The webpage is just a junk.\",\n        \"onion27.question.13\": \"Is there a Chinese version?\",\n        \"onion27.question.14\": \"[Hidden Message No.17]\",\n        \"onion27.question.15\": \"Did you use any framework to build this website?\",\n        \"onion27.question.16\": \"How do you color the text?\",\n        \"onion27.question.17\": \"Queen-like speak?\",\n        \"onion27.question.18\": \"Sans-like speak?\",\n        \"onion27.question.19\": \"Papyrus-like speak?\",\n        \"onion27.question.20\": \"You gender?\",\n        \"onion27.question.21\": \"Your best friend now?\",\n        \"onion27.operation.next\": \"Next\",\n        \"onion27.operation.skip\": \"Skip\",\n        \"onion27.sections.options\": \"Options\",\n        \"onion27.sections.navigation\": \"Navigation\",\n        \"onion27.special.rip_wolfys\": \"* Repose en paix, \\\\[Wolfys Nebell (2007-2021)\\\\].\",\n        \"onion27.dialog.thats_all\": \"* That's all.\\\\n* Choose another \\\\[option\\\\] to see.\",\n        \"onion27.dialog.boring50\": \"* Well, don't you have something more important to do?\",\n        \"onion27.dialog.boring100\": \"* ...\",\n        \"onion27.dialog.secret0\": \"* Huh, you are really boring, huh? \",\n        \"onion27.dialog.secret1\": \"* Well, you may want to take a look in the code. \",\n        \"onion27.dialog.secret2\": \"* \\\\{YOU WILL FIND SOMETHING, FULL OF DARKNESS\\\\}.\",\n    }\n};\n\n\n//# sourceURL=webpack://github_homepage/./src/resources.ts?");

/***/ }),

/***/ "./src/typewriting.ts":
/*!****************************!*\
  !*** ./src/typewriting.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextText: () => (/* binding */ nextText),\n/* harmony export */   skipText: () => (/* binding */ skipText),\n/* harmony export */   startTypewriting: () => (/* binding */ startTypewriting),\n/* harmony export */   typeWriteOne: () => (/* binding */ typeWriteOne),\n/* harmony export */   writeText: () => (/* binding */ writeText)\n/* harmony export */ });\n/* harmony import */ var _events_TypewriterStartEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/TypewriterStartEvent */ \"./src/events/TypewriterStartEvent.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.ts\");\n\n\nlet indexCounter = 0;\nlet boringCount = 0;\nfunction typeWriteOne(el) {\n    let a = \"\";\n    if (indexCounter < _index__WEBPACK_IMPORTED_MODULE_1__.dialogs[Number.parseInt(el.getAttribute(\"data-content\"))].length) {\n        a = _index__WEBPACK_IMPORTED_MODULE_1__.dialogs[Number.parseInt(el.getAttribute(\"data-content\"))][indexCounter];\n    }\n    else {\n        a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.thats_all\");\n        boringCount++;\n        if (boringCount >= 50) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.boring50\");\n        }\n        if (boringCount >= 100) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.boring100\");\n        }\n        if (boringCount === 1000) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.secret0\");\n        }\n        if (boringCount === 1001) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.secret1\");\n        }\n        if (boringCount === 1002) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.secret2\");\n        }\n    }\n    if (a === null) {\n        console.error(\"Cannot read the content!\");\n        return;\n    }\n    const oldHd = el.getAttribute(\"data-typewriter-hd\");\n    if (oldHd !== \"-1\") {\n        clearInterval(Number.parseInt(oldHd));\n    }\n    let typeWriteCount = 0;\n    el.innerHTML = '';\n    let highlightMode = false;\n    let charaMode = false;\n    let sansMode = false;\n    let papyMode = false;\n    let delay = -1;\n    document.dispatchEvent(new _events_TypewriterStartEvent__WEBPACK_IMPORTED_MODULE_0__.TypewriterStartEvent(indexCounter, Number.parseInt(el.getAttribute(\"data-content\"))));\n    let hd = setInterval(() => {\n        if (delay !== -1) {\n            delay -= 1;\n            return;\n        }\n        let currentChar = a[typeWriteCount];\n        if (currentChar === \"\\\\\") {\n            currentChar = a[++typeWriteCount];\n            if (currentChar === \"n\") {\n                el.innerHTML += '<br>';\n            }\n            else if (currentChar === \"\\\\\") {\n                el.innerHTML += '\\\\';\n            }\n            else if (currentChar === \"[\") {\n                highlightMode = true;\n            }\n            else if (currentChar === \"]\") {\n                highlightMode = false;\n            }\n            else if (currentChar === \"{\") {\n                charaMode = true;\n            }\n            else if (currentChar === \"}\") {\n                charaMode = false;\n            }\n            else if (currentChar === \"p\") {\n                papyMode = true;\n            }\n            else if (currentChar === \"s\") {\n                sansMode = true;\n            }\n            else if (currentChar === \"w\") {\n                delay = 0;\n            }\n            else if (currentChar === \"W\") {\n                delay = 10;\n            }\n        }\n        else {\n            let renderedChar = \"\";\n            if (highlightMode) {\n                renderedChar += \"<span class=\\\"highlighted-text\\\">\";\n            }\n            else if (charaMode) {\n                renderedChar += \"<span class=\\\"charad-text\\\">\";\n            }\n            else {\n                renderedChar += \"<span>\";\n            }\n            if (sansMode) {\n                renderedChar += \"<span style=\\\"font-family:'sans', 'Comic Sans MS';\\\">\";\n            }\n            else if (papyMode) {\n                renderedChar += \"<span style=\\\"font-family:'papy', 'Papyrus';\\\">\";\n            }\n            else {\n                renderedChar += \"<span>\";\n            }\n            if (currentChar === \"&\") {\n                renderedChar += \"&amp;\";\n            }\n            else if (currentChar === \"<\") {\n                renderedChar += \"&lt;\";\n            }\n            else if (currentChar === \">\") {\n                renderedChar += \"&gt;\";\n            }\n            else {\n                renderedChar += currentChar;\n            }\n            renderedChar += \"</span></span>\";\n            el.innerHTML += renderedChar;\n        }\n        typeWriteCount += 1;\n        if (typeWriteCount === a.length) {\n            clearInterval(hd);\n            el.setAttribute(\"data-typewriter-hd\", \"-1\");\n        }\n    }, 70);\n    el.setAttribute(\"data-typewriter-hd\", hd.toString());\n}\n// Just a copy from typeWriteOne() with few changes.\nfunction writeText(el) {\n    let a = \"\";\n    if (indexCounter < _index__WEBPACK_IMPORTED_MODULE_1__.dialogs[Number.parseInt(el.getAttribute(\"data-content\"))].length) {\n        a = _index__WEBPACK_IMPORTED_MODULE_1__.dialogs[Number.parseInt(el.getAttribute(\"data-content\"))][indexCounter];\n    }\n    else {\n        a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.thats_all\");\n        boringCount++;\n        if (boringCount >= 50) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.boring50\");\n        }\n        if (boringCount >= 100) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.boring100\");\n        }\n        if (boringCount === 1000) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.secret0\");\n        }\n        if (boringCount === 1001) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.secret1\");\n        }\n        if (boringCount === 1002) {\n            a = (0,_index__WEBPACK_IMPORTED_MODULE_1__.translateI18N)(\"onion27.dialog.secret2\");\n        }\n    }\n    if (a === null) {\n        console.error(\"Cannot read the content!\");\n        return;\n    }\n    const oldHd = el.getAttribute(\"data-typewriter-hd\");\n    if (oldHd !== \"-1\") {\n        clearInterval(Number.parseInt(oldHd));\n        el.setAttribute(\"data-typewriter-hd\", \"-1\");\n    }\n    let typeWriteCount = 0;\n    el.innerHTML = '';\n    let highlightMode = false;\n    let charaMode = false;\n    let sansMode = false;\n    let papyMode = false;\n    while (true) {\n        let currentChar = a[typeWriteCount];\n        if (currentChar === \"\\\\\") {\n            currentChar = a[++typeWriteCount];\n            if (currentChar === \"n\") {\n                el.innerHTML += '<br>';\n            }\n            else if (currentChar === \"\\\\\") {\n                el.innerHTML += '\\\\';\n            }\n            else if (currentChar === \"[\") {\n                highlightMode = true;\n            }\n            else if (currentChar === \"]\") {\n                highlightMode = false;\n            }\n            else if (currentChar === \"{\") {\n                charaMode = true;\n            }\n            else if (currentChar === \"}\") {\n                charaMode = false;\n            }\n            else if (currentChar === \"p\") {\n                papyMode = true;\n            }\n            else if (currentChar === \"s\") {\n                sansMode = true;\n            }\n        }\n        else {\n            let renderedChar = \"\";\n            if (highlightMode) {\n                renderedChar += \"<span class=\\\"highlighted-text\\\">\";\n            }\n            else if (charaMode) {\n                renderedChar += \"<span class=\\\"charad-text\\\">\";\n            }\n            else {\n                renderedChar += \"<span>\";\n            }\n            if (sansMode) {\n                renderedChar += \"<span style=\\\"font-family:'sans', 'Comic Sans MS';\\\">\";\n            }\n            else if (papyMode) {\n                renderedChar += \"<span style=\\\"font-family:'papy', 'Papyrus';\\\">\";\n            }\n            else {\n                renderedChar += \"<span>\";\n            }\n            if (currentChar === \"&\") {\n                renderedChar += \"&amp;\";\n            }\n            else if (currentChar === \"<\") {\n                renderedChar += \"&lt;\";\n            }\n            else if (currentChar === \">\") {\n                renderedChar += \"&gt;\";\n            }\n            else {\n                renderedChar += currentChar;\n            }\n            renderedChar += \"</span></span>\";\n            el.innerHTML += renderedChar;\n        }\n        typeWriteCount += 1;\n        if (typeWriteCount === a.length) {\n            console.log(\"break! \");\n            break;\n        }\n    }\n}\nfunction startTypewriting() {\n    const needToTypewrites = document.querySelectorAll(\".typewriter\");\n    for (const i of needToTypewrites) {\n        if (i.getAttribute(\"data-typewriter-hd\") === null) {\n            i.setAttribute(\"data-typewriter-hd\", \"-1\");\n        }\n        typeWriteOne(i);\n    }\n}\nfunction nextText() {\n    var _a;\n    if (((_a = document.querySelector(\".typewriter\")) === null || _a === void 0 ? void 0 : _a.getAttribute(\"data-typewriter-hd\")) === \"-1\") {\n        indexCounter += 1;\n        startTypewriting();\n    }\n}\nfunction skipText() {\n    var _a, _b;\n    if (((_a = document.querySelector(\".typewriter\")) === null || _a === void 0 ? void 0 : _a.getAttribute(\"data-typewriter-hd\")) !== \"-1\" && ((_b = document.querySelector(\".typewriter\")) === null || _b === void 0 ? void 0 : _b.getAttribute(\"data-unskippable\")) === null) {\n        writeText(document.querySelector(\".typewriter\"));\n        // indexCounter += 1;\n    }\n}\n\n\n//# sourceURL=webpack://github_homepage/./src/typewriting.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;