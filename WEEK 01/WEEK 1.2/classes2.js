class Calculator{
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }

    add(){
        console.log(this.num1 + this.num2)  
    }
    subtract(){
        console.log(this.num1 - this.num2);
        
    }
}

let myCalculator = new Calculator(20, 10)
myCalculator.subtract()