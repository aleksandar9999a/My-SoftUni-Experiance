class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    isRegistered(name, grade) {
        if (this.kids[grade]) {
            return this.kids[grade].filter(x => x.includes(name)).length === 1;
        }
        return false
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            throw new Error(`${name}'s money is not enough to go on vacation to ${this.destination}.`)
        }

        if (this.isRegistered(name, grade)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        if (this.kids[grade]) {
            this.kids[grade].push(`${name}-${budget}`);
        } else {
            this.kids[grade] = [`${name}-${budget}`]
        }
    }

    removeChild(name, grade){
        if (!this.isRegistered(name, grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }

        this.kids[grade].map((x, i) => {
            if (x.includes(name)) {
                this.kids[grade].splice(i, 1);
            }
        })

        return this.kids[grade]
    }
}

module.exports = Vacation;