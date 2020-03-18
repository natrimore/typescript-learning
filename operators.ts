// Array

let fruitss: Array<string> = ['apple', 'green apple', 'grapes'];
let foods: string[] = ['pizza', 'burger', 'toster'];
let edibles: Array<string> = [...fruitss, ...foods];

console.log("Got the edibles as: ", edibles);

// Object

let users = {
    firstName: 'Jakhongir',
    lastName: 'Murtazayev',
    username: 'natrimore' 
};

let userDetails = {
    ...users,
    address: 'Sergeli S.Khujanov 23',
    email: 'jakhongir.murtazayev@gmail.com'
};

console.log("Got the users as: ", userDetails);


// Functions

function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log("Got the sum of all the numbers as: ", add(...numbers));

// BackTricks

console.log(`The user with name: ${users.firstName} has an address of : ${userDetails.address} and an email of: ${userDetails.email}`);
