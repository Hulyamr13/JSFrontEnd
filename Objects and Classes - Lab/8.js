function catConstructor(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of cats) {
        let [catName, catAge] = cat.split(' ');
        let catFromClass = new Cat(catName, catAge);
        catFromClass.meow();
    }
}


function catConstructor(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    cats.forEach(cat => {
        const [catName, catAge] = cat.split(' ');
        new Cat(catName, catAge).meow();
    });
}

catConstructor(['Mellow 2', 'Tom 5']);
// Output:
// Mellow, age 2 says Meow
// Tom, age 5 says Meow

catConstructor(['Candy 1', 'Poppy 3', 'Nyx 2']);
// Output:
// Candy, age 1 says Meow
// Poppy, age 3 says Meow
// Nyx, age 2 says Meow
