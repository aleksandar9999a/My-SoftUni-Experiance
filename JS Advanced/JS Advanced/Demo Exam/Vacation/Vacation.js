class Vacation{
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){
        if (budget < this.budget) {
            throw new Error(`${name}'s money is not enough to go on vacation to ${this.destination}.`)
        }
    }
}

module.exports = Vacation;