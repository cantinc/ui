'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const extReg = /^(.+)\.([^.]+)$/;
const getExtension = (file) => {
    if (!(file === null || file === void 0 ? void 0 : file.name)) {
        return '???';
    }
    const fileName = file.name.match(extReg);
    if (!(fileName === null || fileName === void 0 ? void 0 : fileName[2])) {
        return '???';
    }
    return fileName[2].toLowerCase();
};

exports.extReg = extReg;
exports.getExtension = getExtension;
