const EDTCache = require('./edtCache');
const cache = new EDTCache();

exports.isInit = () => {
    return cache.isInit();
}

exports.getAll = () => {
    return cache.getAll();
}

exports.getEDTInfos = () => {
    return cache.getEDTInfos();
}