export function reformated(localized: string) {
    return (!!localized) ? (localized.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';
}