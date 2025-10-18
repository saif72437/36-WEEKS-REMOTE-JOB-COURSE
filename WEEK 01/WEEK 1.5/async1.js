function sayHello() {
    let sum = 0
    for (let index = 0; index < 1000000000000; index++) {
        sum++
    }
    
}

console.log("Before");
setTimeout(sayHello, 1000)
console.log("After");

