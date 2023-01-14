
class Vehicle {
    constructor(wheels) {       //Q: see there is no variable type in argument
        this.wheels = wheels;  //Q: not declaring this 'wheels' variable above the constructor 
    }
    toString() {
        return '( number of wheels: ' + this.wheels + ') , ';
    }
}

class Car extends Vehicle {
    constructor(color) {        //Q: see there is no variable type in argument
        super(4);
        this.color = color;     //Q: not declaring this 'color' variable above the constructor 
    }

    toString() {
        return super.toString() + ' colored: ' + this.color;
    }    
}

//------- class 
console.log("~~~ class example ~~~")
let car = new Car('blue');
console.log(car.toString());
console.log(car instanceof Car);
console.log(car instanceof Vehicle);

