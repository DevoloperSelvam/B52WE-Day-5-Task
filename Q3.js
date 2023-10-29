class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getAddress() {
        return this.address;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setAddress(address) {
        this.address = address;
    }
}

let person1 = new Person('Leo', 30, 'Male', '143 Main St');
console.log(person1.getName()); // Outputs: 'Leo'

console.log(person1.getAge()); // Outputs: '30'

console.log(person1.getAddress()); // Outputs: '143 Main St'

console.log(person1.getGender()); // Outputs: 'Male'

person1.setName("shanu");

console.log(person1.getName());  // Outputs: 'shanu'

person1.setAge(23); 

console.log(person1.getAge()); // Outputs: '23'

person1.setAddress("123 Main St"); 

console.log(person1.getAddress()); // Outputs: '123 Main St'

person1.setGender("Female"); 

console.log(person1.getGender()); // Outputs: 'Female'


