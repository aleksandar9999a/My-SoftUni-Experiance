class Ticket{
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

const splitedData = x => x.split('|');
const createObj = x => new Ticket(x[0], Number(x[1]), x[2]);

function solve(arr, criteria) {
    return arr.map(splitedData).map(createObj).sort((a, b) => {
        if (criteria === "price") {
            return a[criteria] - b[criteria];
        }
        return a[criteria].localeCompare(b[criteria]);
    });
}

console.log(
    solve(
        ['Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
        'destination'

    )
);
