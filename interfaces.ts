interface IHuman {
    readonly age: number;
    walk(): void;
}

interface IPerson extends IHuman{
    fName: string;
    lName?: string;
}

// For Objects

const iuser: IPerson = {
    fName: ``,
    age: 10,
    walk: () => {
        return;
    }
};


// class Employees implements IPerson {
//     fName = ``;
//     age = 10;

// }

