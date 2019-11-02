const engineTypes = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];

function newEngineDescribtion({ power }) {
    return engineTypes.find(type => power <= type.power)
}

function newCarriageDescribtion({ color, carriage }) {
    return { type: carriage, color };
}

function newWheelsDescribtion({ wheelsize }) {
    if (wheelsize % 2 === 0) {
        wheelsize = wheelsize - 1;
    }

    return [wheelsize, wheelsize, wheelsize, wheelsize];
}

function carFactory(carDescribtion) {
    return {
        model: carDescribtion.model,
        engine: newEngineDescribtion(carDescribtion),
        carriage: newCarriageDescribtion(carDescribtion),
        wheels: newWheelsDescribtion(carDescribtion)
    };
}

console.log(
    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
    )
);
