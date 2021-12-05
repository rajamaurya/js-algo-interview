class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.getName = function(){
            console.log("hello from constructor")
            return this.name;
        }
        this.getAge = ()=> this.age;
    }

    getName(){
        console.log("called here")
        return this.name
    }
}

const person = new Person("avs", 45);

class Employee extends Person{
    constructor(name, age, salary, company){
        super(name, age);
        this.salary = salary;
        this.company = company;
    }
    getInfo(){
        return {
            salary: this.salary,
            company: this.company
        }
    }
}
const emp = new Employee("epm1" , 34, 30000,"xxx")
// console.log(person.name);
console.log(person.getName())
console.log(person.getAge())

console.log(emp.getName())

// var i=1; 
// for(let i= 0; i < 10; i++){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }

// console.log(module.exports)
// console.log(exports)