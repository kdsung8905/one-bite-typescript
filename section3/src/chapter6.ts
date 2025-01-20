/**
 * 타입 단언 assertion
 */

type Person = {
    name : string;
    age : number;
}

let person = {} as Person;
person.name = "kim";
person.age = 11;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "ee",
    color:"b",
    breed:"진도"
} as Dog;


/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B a가 b의 슈퍼타입이거나, a가 b의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;


/**
 * const 단언
 */

let num4 = 10 as const;



let cat = {
    name:"1",
    color:"red"
} as const;

//cat.name= '';



/**
 * non null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post:Post = {
    title : "1",
    author:"kim"
}

const len : number = post.author!.length;