class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace){
        if (this.hddMemory < requiredSpace) {
            throw new Error("There is not enough space on the hard drive")
        }else{
            let currFormat = {name: name,
                requiredSpace: requiredSpace};

            this.installedPrograms.push(currFormat);
            this.hddMemory -= requiredSpace;
            return currFormat;
        }
    }

    uninstallAProgram(name){
        let res = this.isHere(name, this.installedPrograms);
        if (!res[0]) {
            throw new Error("Control panel is not responding")
        }else{
            let value = res[2].requiredSpace;
            this.hddMemory += value;
            this.installedPrograms.splice(res[1], 1);
        }

        return this.installedPrograms
    }
    
    isHere(programName, arr){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === programName) {
                return [true, i, arr[i]]
            }
        }

        return [false];
    }

    openAProgram(name){
        if (!this.isHere(name, this.installedPrograms)[0]) {
            throw new Error(`The ${name} is not recognized`)
        }

        if (this.isHere(name, this.taskManager)[0]) {
            throw new Error(`The ${name} is already open`)
        }

        let currProgramSpace = Object.values(this.isHere(name, this.installedPrograms)[2]);
        let ram = (currProgramSpace[1] / this.ramMemory) * 1.5;
        let cpu = ((currProgramSpace[1] / this.cpuGHz) / 500) * 1.5;
        
        let currFormat = {name: name,
            ramUsage: ram,
            cpuUsage: cpu};

        this.taskManager.push(currFormat);
        this.checkRamAndCpu(name);
        return currFormat
    }

    checkRamAndCpu(name){
        let ram = this.taskManager.map(x => x.ramUsage).reduce((a, b) => a + b, 0);
        let cpu = this.taskManager.map(x => x.cpuUsage).reduce((a, b) => a + b, 0);

        if (ram >= 100 && cpu >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }else if(ram >= 100 && cpu < 100){
            throw new Error(`${name} caused out of memory exception`);
        }else if(ram < 100 && cpu >= 100){
            throw new Error(`${name} caused out of cpu exception`);
        }
    }

    taskManagerView(){
        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }
        return this.taskManager.map(x => `Name - ${x.name} | Usage - CPU: ${x.cpuUsage.toFixed(0)}%, RAM: ${x.ramUsage.toFixed(0)}%`).join('\n')
    }
}

module.exports = Computer;