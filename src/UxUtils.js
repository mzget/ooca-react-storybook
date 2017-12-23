"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
function getFontSize() {
    let isSmall = window.innerWidth < 840;
    return isSmall ? 14 : 24;
}
exports.getFontSize = getFontSize;
;
function getDialogWidth() {
    let isSmall = document.documentElement.clientWidth < 840;
    return isSmall ? '90%' : '440px';
}
exports.getDialogWidth = getDialogWidth;
;
function calcFontSize() {
    let isSmall = window.innerWidth < 840;
    const msgLabelFont = { fontSize: isSmall ? 17 : 24 };
    return msgLabelFont;
}
exports.calcFontSize = calcFontSize;
function getLocalized(Local) {
    const _isLocal = (!!Local) ? (Local.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';
    return _isLocal;
}
exports.getLocalized = getLocalized;
