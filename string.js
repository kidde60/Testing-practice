function stringLength(str) {
    // return str.length;
    if (str.length > 0 && str.length <= 10) {
        return str.length
    } else {
        throw new error('The string does not match the expected characters');
    }
}
module.exports = stringLength;