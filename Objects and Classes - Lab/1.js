function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };
    return person;
}


let person1 = personInfo("Peter", "Pan", "20");
console.log(person1);
// Output: { firstName: 'Peter', lastName: 'Pan', age: 20 }

let person2 = personInfo("George", "Smith", "18");
console.log(person2);
// Output: { firstName: 'George', lastName: 'Smith', age: 18 }
