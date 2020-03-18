// Array
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var fruitss = ['apple', 'green apple', 'grapes'];
var foods = ['pizza', 'burger', 'toster'];
var edibles = __spreadArrays(fruitss, foods);
console.log("Got the edibles as: ", edibles);
// Object
var users = {
    firstName: 'Jakhongir',
    lastName: 'Murtazayev',
    username: 'natrimore'
};
var userDetails = __assign(__assign({}, users), { address: 'Sergeli S.Khujanov 23', email: 'jakhongir.murtazayev@gmail.com' });
console.log("Got the users as: ", userDetails);
// Functions
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log("Got the sum of all the numbers as: ", add.apply(void 0, numbers));
// BackTricks
console.log("The user with name: " + users.firstName + " has an address of : " + userDetails.address + " and an email of: " + userDetails.email);
