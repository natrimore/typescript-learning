function greetUser(name: string) {
    console.log(`Hello there, ${name}!`);
    
}

const greetUserByName = function(name: string) {
    console.log(`Hello there, ${name}!`);
}

greetUser('Yosinbek');
greetUserByName('Shaxzod');

// Arrow functions
const greetUserByNameArrow = (name: string) => {
    console.log(`Hello there, ${name}!`);
}

greetUserByNameArrow('Jahongir');

const ediblesArrow = [
    {
        edible: 'pizza',
        isVegan: false
    },
    {
        edible: 'burger',
        isVegan: false
    },
    {
        edible: 'free',
        isVegan: true
    },
    {
        edible: 'toster',
        isVegan: true
    },
    {
        edible: 'hot dog',
        isVegan: true
    }
];

console.log(
    ediblesArrow.filter(function(item) {
        return item.isVegan;
    })
);

console.log(ediblesArrow.filter(item => item.isVegan));

const user = {
    firstName: 'Jakhongir',
    lastName: 'Murtazaev',
    lazyGreet: function() {
        setTimeout(() => console.log(`Hey there, ${this.firstName}`), 1000)
    }
}

user.lazyGreet();