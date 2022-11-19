export const _find = (object, field, value) => object.find(item => item[field] === value);

export const _findIndex = (object, field, value) => object.findIndex(item => item[field] === value);

export const _isEmpty = (item) => !item?.length;

export const _get = (object, key = '', defaultValue = undefined) => object[key] || defaultValue;

export const _set = (object, key = '', value) => object[key] = value;

export const _notEmpty = (array, defaultValue = null) => array?.length ? array : defaultValue;