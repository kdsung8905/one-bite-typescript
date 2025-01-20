/**
 * 객체 타입간의 호환성
 */

type Animal = {
    name: string;
    color : string;
};

type Dog = {
    name : string;
    color : string;
    breed : string;
};

let animal : Animal = {
    name:"기린",
    color:"yellow",
};

let dog: Dog = {
    name:"돌돌",
    color:"brown",
    breed:"진도"
};

animal = dog;

//dog = animal 이건암됨

type Book = {
    name:string;
    price:number;
}
type ProgrammingBootk = {
    name:string;
    price:number;
    skill:string


}

let book:Book;

let programmingBoot: ProgrammingBootk = {
    name: "12",
    price: 1000,
    skill: "react"
}

book = programmingBoot;


/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
    name: "12",
    price: 1000,
    //skill: "react"
}

let book3: Book = programmingBoot // 초과 프로퍼티 검사를 피할 수 있어



