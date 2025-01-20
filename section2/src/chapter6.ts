//any
// 특정 변수의 타입을 우리가 확실히 모르~

let anyVar: any = 10;
anyVar = "g";

anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num -= anyVar;

//타입 검사를 어지어찌 통과하더라도 
//런타임 에러가 발생함!!!!!
//타입스크립트 이점을 다 사용하지 않는 것과 같아서.. 
//최대한 사용하지 않는게 좋음




//unknown 
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {}

//any 타입과 같은 것 처럼 보이지만....
//조금 다른점이 있다면 모든 타입의 변수에 unknown 을 집어넣을 . 수없음

//ex) num = unknownVar; 

//이 타입을 활용해보고 싶다면 타입을 확실히 밝혀서 타입 정제를 했을 때만.!!!!!
if(typeof unknownVar === "number"){
    num = unknownVar;
}

