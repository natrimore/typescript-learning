class Person {

    /**
     *
     */
    constructor(
        protected firstName: string, 
        protected lastName: string, 
        protected age: number
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person: Person = new Person('Jakhongir', 'Murtazaev', 23);
console.log(person.getFullName());

class Employee extends Person{
    
    get employeeId(): number {
        return this.id;
    }

    set employeeId(employeeId: number) {
        this.id = employeeId;
    }
    /**
     *
     */
    constructor(
        private id: number,
        firstName: string, 
        lastName: string, 
        private middleName: string,
        age: number
    ) {
        super(firstName, lastName, age);
    }

    getFullName(): string {
        // const nameSegments: Array<string> = super.getFullName().split(' ');
        // nameSegments.splice(1, 0, this.middleName);
        // const fullNmae = nameSegments.join(' ');
        // return `${fullNmae}`;
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}

const manager: Employee = new Employee(1, 'Jakhongir', 'Murtazaev', 'Muzaffar ogli', 23);
console.log(manager.getFullName());
console.log(manager.employeeId);
manager.employeeId = 20;
console.log(manager.employeeId);


