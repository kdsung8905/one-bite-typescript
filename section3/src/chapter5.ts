/**
 * 타입 추론
 */

let a = 10;
let b = "10";
let c = {
    id:1,
    name:"dskim",
    profile:{
        nickname:"dskim"
    },
    urls: ["http://localhost:123"]
};

let {id, name, profile} = c;

let [one, two, three] = [1, "1", true]

function func(message = "hello"){
    return "hello";
}

//암묵적 any 
let d;
d = 10;   // -> number로 진화
d.toFixed();
//d.toUpperCase(); 안됨
d = "hello" // -> string 으로 진화
d.toUpperCase();
//d.toFixed(); 안됨


//number 타입이 아닌, 값 10을 갖는 number리터럴 타입으로 지정됨
const num = 10;

let arr= [1, "string"];

