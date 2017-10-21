// mask text for input
export function dataToMask(data, mask) {
	if (!mask) return data;

	const maskStartRegExp = /^([^#ANX]+)/;

	if (data.length == 1 && maskStartRegExp.test(mask)) {
		data = maskStartRegExp.exec(mask)[0] + data;
	}

	let text = '';

	let cOffset = 0;

	for (let i = 0; i < mask.length; i++) {
		const m = mask.charAt(i);
		switch (m) {
			case '#':
				break;
			case 'A':
				break;
			case '?':
				break;
			case 'N':
				break;
			case 'X':
				break;
			default:
				data = data.replace(m, '');
		}
	}
	for (let _i = 0, x = 1; x && _i < mask.length; ++_i) {
		const c = data.charAt(_i - cOffset);
		const _m = mask.charAt(_i);

		switch (_m) {
			case '#':
				if (/\d/.test(c)) {
					text += c;
				} else {
					x = 0;
				} break;
			case 'A':
				if (/[a-z]/i.test(c)) {
					text += c;
				} else {
					x = 0;
				} break;
			case 'N':
				if (/[a-z0-9]/i.test(c)) {
					text += c;
				} else {
					x = 0;
				} break;

			case '?':
				cOffset++; break;
			case 'X':
				text += c; break;
			default:
				text += _m;

				if (c && c !== _m) {
					data = ' ' + data;
				}

				break;
		}
	}
	return text;
};