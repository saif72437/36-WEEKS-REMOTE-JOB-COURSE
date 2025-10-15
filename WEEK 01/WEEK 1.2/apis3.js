function sayHello(name){
    console.log("Hello", name);
    
}

function greetMe(fun){
    let name = "Saif";
    fun(name)
}

greetMe(sayHello)