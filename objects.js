let animal = {
    type: "Unknown",
    sound : function(){
        console.log("The " + this.type + "make a sound")
    }
}
let dog = Object.create(animal)
dog.type = "Dog";
dog.color = "brown"
console.log(dog)

let goat = {}
Object.setPrototypeOf(goat, animal)
goat.type = "Goat"
console.log(goat)


let vehicle = {wheels : 4};
let car = {
    seats: 5,
    __proto__: vehicle,
    wheels: 6,
}
//console.log('vehicle:', vehicle, vehicle.__proto__);
console.log('car:', car, car.__proto__);
//console.log('car wheels:', car.wheels);


function  Person(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);

    }
}

function Person1(name, age) {
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);

    }
    

}
const Person2 = new Person1("John", 11)
const PersonOne = new Person("Solomon", 13)
console.log(PersonOne.name)
console.log(PersonOne.age)
console.log(Person2.name)


const jason = '{"result": true , "count" : 42}';
const obj = JSON.parse(jason);
console.log(obj.count)
console.log(obj.result)

console.log(JSON.stringify({x: 5, y: 6}));