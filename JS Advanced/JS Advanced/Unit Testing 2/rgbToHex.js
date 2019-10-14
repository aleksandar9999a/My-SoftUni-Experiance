function isValidColor(color){
    return !Number.isInteger(color) || (color < 0) || (color > 255)
}

module.exports = function rgbToHexColor(red, green, blue) {
    if (Array.from(arguments).filter(isValidColor).length > 0) {
        return undefined;
    }
    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).toUpperCase().slice(1);
}
