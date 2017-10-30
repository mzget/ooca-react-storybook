/* eslint-disable */

export function getFontSize() {
    let isSmall = window.innerWidth < 840;
    return isSmall ? 14 : 24
};

export function getDialogWidth() {
    let isSmall = document.documentElement.clientWidth < 840;
    return isSmall ? '90%' : '440px';
};

export function calcFontSize() {
    let isSmall = window.innerWidth < 840;
    const msgLabelFont = { fontSize: isSmall ? 17 : 24 };

    return msgLabelFont;
}

export function getLocalized(Local) {
    const _isLocal = (!!Local) ? (Local.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';

    return _isLocal;
}