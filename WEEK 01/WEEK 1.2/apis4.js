function add(a, b){
    console.log(a+b);
    
}
function subtract(a, b){
    console.log(a-b);
    
}
function multiple(a, b){
    console.log(a*b);
    
}


function calculator(num1, num2, fun){
    fun(num1, num2)
}

calculator(10, 20, multiple)