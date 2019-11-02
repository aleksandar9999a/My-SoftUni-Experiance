const engineTypes = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 }
}

function newEngineDescribtion({power}) {
    if (power <= engineTypes.small.power) {
        return engineTypes.small;
    }
    if (power <= engineTypes.normal.power) {
        return engineTypes.normal;
    }
    return engineTypes.monster;
}

function newCarriageDescribtion({ color, carriage }) {
    return { type: carriage, color };
}

function newWheelsDescribtion({wheelsize}) {
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
