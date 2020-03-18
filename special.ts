// void

function logToConsole(): void {
    console.log("Hello world!");
    return;
}

// Array

let fruits: string[];
fruits = ['apple', 'apelsin', 'banana', 'kiwi'.toUpperCase(), (() => 'berry')()], null, undefined;

let food: Array<string>;
food = ['pizza', 'burger'];

let genericArray: Array<string | number | boolean>;
genericArray = ['pizza', 'burger', 122, 0b010101, false, true, null, undefined];

// Tuple

let coordinates: [number, number, number];
coordinates = [12, 13, 14];

let genTuple: [number, string, boolean];
genTuple = [12, '13', false];

// Objects

let user = {
    firstName: 'Jakhongir',
    lastName: 'Murtazayev',
    username: 'natrimore',
    getUserName: (): string => this.username
};

// Enum

enum DaysOfTheWeek {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday'
};

let dayToday: DaysOfTheWeek;
dayToday = DaysOfTheWeek.MONDAY;
dayToday = DaysOfTheWeek.WEDNESDAY;

// any

let authorizedUser: any = {
    firstName: 'Jakhongir',
    lastName: 'Murtazayev',
    username: 'natrimore'
};
