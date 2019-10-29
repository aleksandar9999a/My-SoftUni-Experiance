class Company{
    constructor(){
        this.departments = {};
    }

    isEmptyString(...args){
        return args.filter(x => x === '').length != 0;
    }

    isUndefined(...args){
        return args.filter(x => x === undefined).length != 0;
    }

    isNull(...args){
        return args.filter(x => x === null).length != 0;
    }

    isValidInput(username, salary, position, department){
        let err = 'Invalid input!';
        if (this.isEmptyString(username, salary, position, department)) {
            throw new Error(err);
        }
        if (this.isUndefined(username, salary, position, department)) {
            throw new Error(err);
        }
        if (this.isNull(username, salary, position, department)) {
            throw new Error(err);
        }
        if (salary < 0) {
            throw new Error(err);
        }
    }
    
    addEmployee(username, salary, position, department){
        this.isValidInput(username, salary, position, department);
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({username, salary, position});
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment(){
        let keys = Object.keys(this.departments);
        let bestDepartment = keys.map(department => {
                                        let avSalary = this.departments[department]
                                        .reduce((acc, e) => acc += e.salary, 0) / this.departments[department].length;
                                        return {department, avSalary}
                                    })
                                    .sort((a, b) => b.avSalary - a.avSalary);

        return `Best Department is: ${bestDepartment[0].department}
Average salary: ${bestDepartment[0].avSalary.toFixed(2)}
${this.departments[bestDepartment[0].department].sort((a, b) => b.salary - a.salary).map(x => `${x.username} ${x.salary} ${x.position}`).join('\n')}`
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
