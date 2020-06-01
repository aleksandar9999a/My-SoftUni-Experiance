function addAndRemoveElementsFromArray(commands) {
    const res = commands.reduce((acc, x, i) => {
        if (x === 'add') { acc.push(i + 1); }
        if (x === 'remove') { acc.pop(); }
        return acc;
    }, []).join(' ');

    console.log(res === '' ? 'Empty' : res);
}
addAndRemoveElementsFromArray(['remove'])