const SELECTOR = {
    NUM1: '#num1',
    NUM2: '#num2',
    RESULT: '#result',
    SUM_BUTTON: '#sumButton',
    SUBTRACT_BUTTON: '#subtractButton',
}

class Calculator {
    constructor() {
        this.num1 = document.querySelector(SELECTOR.NUM1);
        this.num2 = document.querySelector(SELECTOR.NUM2);
        this.result = document.querySelector(SELECTOR.RESULT);
        this.addBtn = document.querySelector(SELECTOR.SUM_BUTTON);
        this.subtractBtn = document.querySelector(SELECTOR.SUBTRACT_BUTTON);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSubtractClick = this.handleSubtractClick.bind(this);

        this._initEvents();
    }

    handleAddClick() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = +x + +y;
    }

    handleSubtractClick() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = +x - +y;
    }

    _initEvents(){
        this.addBtn.addEventListener('click', this.handleAddClick);
        this.subtractBtn.addEventListener('click', this.handleSubtractClick);
    }
}

new Calculator();
