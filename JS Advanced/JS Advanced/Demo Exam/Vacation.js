class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (this.kids.hasOwnProperty(grade)) {
            let isContain = false;

            this.kids[grade].map(x => {
                let e = x.split('-');
                if (e[0] === name) {
                    isContain = true;
                }
            })

            if (isContain) {
                return `${name} is already in the list for this ${this.destination} vacation.`
            }

            this.kids[grade].push(`${name}-${budget}`);
        } else {
            this.kids[grade] = [`${name}-${budget}`];
        }

        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            let isContain = false;
            this.kids[grade].map((x, i) => {
                let e = x.split('-');
                if (e[0] === name) {
                    isContain = true;
                    this.kids[grade].splice(i, 1);
                }
            })

            if (!isContain) {
                return `We couldn't find ${name} in ${grade} grade.`;
            }
            return this.kids[grade];
        } else {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
    }

    numberOfChildren(){
        this._number = 0;
        for (const grade in this.kids) {
            this._number += this.kids[grade].length;
        }

        return this._number;
    }

    toString(){
        if (this.numberOfChildren() === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let res = `${this.organizer} will take ${this.numberOfChildren()} children on trip to ${this.destination}\n`;

        Object.entries(this.kids).sort((a, b) => a[0] - b[0]);

        for(const grade in this.kids){
            res += `Grade: ${grade}\n`;
            this.kids[grade].map((x, i) => {
                res += `${i + 1}. ${x}\n`
            });
        }

        return res
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());
console.log("Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n");
