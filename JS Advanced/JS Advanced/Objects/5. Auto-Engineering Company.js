function autoEngineeringCompany(arr) {
    let data = {};

    arr.map(e => e.split(' | '))
        .map(([brand, model, produced]) => {
            if (!data.hasOwnProperty(brand)) {
                data[brand] = [];
            }

            let isContent = false;
            let index = 0;

            for (let i = 0; i < data[brand].length; i++) {
                if (data[brand][i].name === model) {
                    isContent = true;
                    index = i;
                }
            }

            if (isContent) {
                data[brand][index].quantity += Number(produced);
            }
            else{
                data[brand].push({name: model, quantity: Number(produced)});
            }
        });

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            console.log(key);
            data[key].map(e => {
                console.log(`###${e.name} -> ${e.quantity}`);
            });
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)