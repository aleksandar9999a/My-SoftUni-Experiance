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
            this.installedPrograms.push({[name]: requiredSpace});
            return {[name]: requiredSpace}
        }
    }
}

module.exports = Computer;