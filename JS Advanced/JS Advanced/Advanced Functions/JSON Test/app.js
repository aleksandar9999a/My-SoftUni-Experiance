import { MOCK } from "./MOCK_DATA.js";

(function(data){
    let keys = Object.keys(data[0]);

    function createTag(tag, content){
        return `<${tag}>${Array.isArray(content) ? content.join('') : content}</${tag}>`
    }

    function createSingleTag(tag, prop, val){
        return `<${tag} ${prop}="${val}"/>`
    }

    const renderTable = createTag.bind(undefined, 'table');
    const renderThead = createTag.bind(undefined, 'thead');
    const renderTbody = createTag.bind(undefined, 'tbody');
    const renderTd = createTag.bind(undefined, 'td');
    const renderTh = createTag.bind(undefined, 'th');
    const renderTr = createTag.bind(undefined, 'tr');
    
    function chooseContentType(map, defaultWrapper, type, content){
        if (typeof map[type] === 'function') {
            return defaultWrapper(map[type](content));
        }
        return defaultWrapper(content);
    }

    const fieldsMap = {
        avatar: (x)=> createSingleTag('img', 'src', x)
    }

    const defaultTd = chooseContentType.bind(
        undefined,
        fieldsMap, renderTd
    )

    document.getElementById('app').innerHTML = renderTable(
        renderThead(renderTr(keys.map(key => renderTh(key))))
        +
        renderTbody(
            data.map(row => renderTr(keys.map(cell => defaultTd(cell, row[cell]))))
        )
    );
})(MOCK);




