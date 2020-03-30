function greetUser(name) {
    console.log("Hello there, " + name + "!");
}
var greetUserByName = function (name) {
    console.log("Hello there, " + name + "!");
};
greetUser('Yosinbek');
greetUserByName('Shaxzod');
// Arrow functions
var greetUserByNameArrow = function (name) {
    console.log("Hello there, " + name + "!");
};
greetUserByNameArrow('Jahongir');
var ediblesArrow = [
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
console.log(ediblesArrow.filter(function (item) {
    return item.isVegan;
}));
console.log(ediblesArrow.filter(function (item) { return item.isVegan; }));
var user = {
    firstName: 'Jakhongir',
    lastName: 'Murtazaev',
    lazyGreet: function () {
        var _this = this;
        setTimeout(function () { return console.log("Hey there, " + _this.firstName); }, 1000);
    }
};
user.lazyGreet();
