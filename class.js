class Human{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size
    }

}

class Mavericks{
    constructor(name, age, size){
        super(name, age, size)
    }

    setName(newName){
        this.name = newName
    }
    getName(){
        return this.name
    }
    setAge(newAge){
        this.age = newAge
    }
    getAge(){
        return this.age
    }
    setSize(bigSize){
        this.size = bigSize
    }
    getSize(){
        return this.size
    }

}

let ayomide = new Mavericks()
console.log(ayomide)