class Car { 
    constructor(name, color){
        console.log("this is", name, "car");

        this.name = name
        this.color = color
        
    }
    printData(){
        console.log("Name of car is", this.name);
        console.log("Color of this car is", this.color);
    }
}

let toyota = new Car("Toyota", "red")
toyota.printData()