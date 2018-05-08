export function reformated(localized) {
    return (!!localized) ? (localized.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';
}
