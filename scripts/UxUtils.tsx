/* eslint-disable */

export function calcFontSize() {
    let isSmall = window.innerWidth < 800;
    const msgLabelFont = { fontSize: isSmall ? '17px' : '24px' };

    return msgLabelFont;
}

export function getLocalized(Local) {
    const _isLocal = (!!Local) ? (Local.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';

    return _isLocal;
}