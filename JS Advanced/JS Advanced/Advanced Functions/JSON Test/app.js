import { MOCK } from "./MOCK_DATA.js";

(function(data){
    let keys = Object.keys(data[0]);

    function createTag(tag, content){
        return `<${tag}>${Array.isArray(content) ? content.join('') : content}</${tag}>`
    }

    const renderTable = createTag.bind(undefined, 'table');
    const renderThead = createTag.bind(undefined, 'thead');
    const renderTbody = createTag.bind(undefined, 'tbody');
    const renderTd = createTag.bind(undefined, 'td');
    const renderTh = createTag.bind(undefined, 'th');
    const renderTr = createTag.bind(undefined, 'tr');
    
    function chooseContentType(){

    }

    const fieldsMap = {
        avatar: ''
    }


    document.getElementById('app').innerHTML = renderTable(
        renderThead(renderTr(keys.map(key => renderTh(key))))
        +
        renderTbody(
            data.map(row => renderTr(keys.map(cell => renderTd(row[cell]))))
        )
    );
})(MOCK);




