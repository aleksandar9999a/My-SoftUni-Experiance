function getDataFromElementById(id){
    let data = document.getElementById(id);
    return data.value.split(', ');
}

function makeTemplate(towns, data){
    const template = Handlebars.compile(data);
    const context = { towns };

    return template(context);
}

function addToHTML(id, data){
    document.getElementById(id).innerHTML = data;
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', async function(e){
        if (e.target.id === 'btnLoadTowns') {
            const towns = getDataFromElementById('towns');
            const list = await fetch('./list.hbs').then(x => x.text());
            const template = makeTemplate(towns, list);
            addToHTML('root', template);
        }
    })
})