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

const filterByProp = (prop, value, element) => element[prop] === value;
const splitCriteria = criteria => criteria.split('-');
const printResult = (x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`;

function solve(json, criteria) {
    let data = JSON.parse(json);

    if (criteria != 'all') {
        data = data.filter(filterByProp.bind(undefined, ...splitCriteria(criteria)));
    }
    
    return data.map(printResult).join('\n');
}

console.log(solve(test, 'gender-Female'));