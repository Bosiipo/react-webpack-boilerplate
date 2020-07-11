
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    // hasHomeLocation(){
    //     return !!this.homeLocation;
    // }
    getGreeting(){
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }

}

// const me = new Student('Bosipo Shogbolu', 22, 'Actuarial Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.hasMajor());

const sly = new Traveller('Badt Guy', 22, 'Lagos');
console.log(sly.getGreeting());

const slyy = new Traveller('Guy');
console.log(slyy.getGreeting());