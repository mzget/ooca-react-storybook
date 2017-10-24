/* eslint-disable */

export function getFontSize() {
    let isSmall = window.innerWidth < 800;
    return isSmall ? 17 : 24
};

export function calcFontSize() {
    let isSmall = window.innerWidth < 800;
    const msgLabelFont = { fontSize: isSmall ? 17 : 24 };

    return msgLabelFont;
}

export function getLocalized(Local) {
    const _isLocal = (!!Local) ? (Local.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';

    return _isLocal;
}