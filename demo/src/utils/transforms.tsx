import Accounting from 'accounting';
import Dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import RelativeTime from 'dayjs/plugin/relativeTime';
import Timezone from 'dayjs/plugin/timezone';

Dayjs.extend(RelativeTime);
Dayjs.extend(Timezone);
Dayjs.extend(AdvancedFormat);

export const camelToUnderscore = (data = '') => {
	return data.replace(/([A-Z])/g, '_$1').toLowerCase();
};

export const camelToDash = (data = '') => {
	return data.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const camelToString = (data = '') => {
	return data.replace(/([A-Z])/g, ' $1').toLowerCase();
};

export const dashToCamel = (data = '') => {
	return data.replace(/-([a-z])/g, g => g[1].toUpperCase());
};

export const dashToCapital = (data = '') => {
	return data
		.split('-')
		.map(k => k.replace(k.charAt(0), k.charAt(0).toUpperCase()))
		.join('');
};

export const dashToString = (data = '') => {
	return data
		.split('-')
		.map(k => k.replace(k.charAt(0), k.charAt(0).toUpperCase()))
		.join(' ');
};

export const phoneToString = (data = '') => {
	return data ? data.replace(/\D+/g, '') : '';
};

export const capitalize = (data = '') => {
	return data.charAt(0).toUpperCase() + data.slice(1);
};

export const deCapitalize = (data = '') => {
	return data.charAt(0).toLowerCase() + data.slice(1);
};

export const stringToUnderscore = (data = '') => {
	return data.split(' ').join('_').toLowerCase();
};

export const underscoreToString = (data = '') => {
	return data ? data.split('_').join(' ').toLowerCase() : data;
};

export const truncate = (data = '', count = 140, ellipsis = false) => {
	return data ? (data.length >= count && ellipsis ? `${data.slice(0, count)}...` : data.slice(0, count)) : null;
};

export const toPhone = (value = '') => {
	return value
		? value
				.replace(/\D/g, '')
				.replace(/(\d*)(\d{3})(\d{3})(\d{4})$/, (s, a, b, c, d) => `+${a} (${b}) ${c}-${d}`)
				.replace(/\+(1\b|\s)\s*/, '')
		: '--';
};

export const toCurrency = (value = '0', precision = 2) => {
	return Accounting.formatMoney(value, '$', precision);
};

export const toNumber = (value = '0', decimal = 0) => {
	return Accounting.formatNumber(value, decimal);
};

export const toPercent = (value = '0', decimal = 0) => {
	return `${parseFloat(value).toFixed(2)}%`;
};

export const toCents = (value = '') => {
	return value ? parseFloat(value) * 100 : 0;
};

export const fromCents = (value = 0) => {
	return value ? Math.abs(value) / 100 : 0;
};

export const toDayjs = (value?) => {
	return Dayjs(value);
};

export const formatDate = (value: any, format?: string) => {
	return Dayjs(value).format(format || 'MM/DD/YYYY @ hh:mmA');
};

export const formatTimestamp = (value: any) => {
	return Dayjs(value).fromNow(true);
};

export const toDate = (value: any) => {
	return Dayjs(value).toDate();
};

export const toJson = (value: any) => {
	return Dayjs(value).toJSON();
};

export const toYear = (value = new Date()) => {
	return Dayjs(value).year();
};

export const toUnix = (value = new Date()) => {
	return Dayjs(value).valueOf();
};
