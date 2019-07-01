function city(myCity, cityArea, cityPopulation, myCountry, code) {
    let cityInfo = {
        name: myCity,
        area: cityArea,
        population: cityPopulation,
        country: myCountry,
        postCode: code
    };

    let cityArr = Object.entries(cityInfo);

    for (let i = 0; i < cityArr.length; i++) {
        let currentArr = cityArr[i];
        console.log(`${currentArr[0]} -> ${currentArr[1]}`);
    }
    
}
city("Sofia"," 492", "1238438", "Bulgaria", "1000")