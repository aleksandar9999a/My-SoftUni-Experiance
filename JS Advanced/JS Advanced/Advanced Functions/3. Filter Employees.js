let test = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;

function solve(json, criteria) {
    let data = JSON.parse(json);

    if (criteria != 'all') {
        criteriaBySplit = criteria.split('-');
        data = data.filter(e => e[criteriaBySplit[0]] === criteriaBySplit[1]);
    }
    
    return data.map((x, i) => {
        return `${i}. ${x.first_name} ${x.last_name} - ${x.email}`
    }).join('\n')
}

console.log(solve(test, 'gender-Female'));