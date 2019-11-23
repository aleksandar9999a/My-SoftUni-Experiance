let template = fetch('./list.hbs').then(x => x.text());

function getDataFromElementById(id){
    let data = document.getElementById(id);
    return data.value.split(', ');
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', function(e){
        if (e.target.id === 'btnLoadTowns') {
            const data = getDataFromElementById('towns');
            
            
            
        }
    })
})