function arrayRotation(numberArr, rotation) {
    while (numberArr.length < rotation) { rotation -= numberArr.length; }
    const res = [...numberArr.slice(rotation), ...numberArr.slice(0, rotation)];
    return res.join(' ');
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([2, 4, 15, 31], 5)