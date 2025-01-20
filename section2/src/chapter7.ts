//void
//vood => 공허, 아무것도 없음을 의미하는 타입!

function func1(): string {
    return "g";
}

function func2(): void {
    console.log("0");
}

let a: void;
//a= 1;  안됨
//a= "1"; 안됨
//a = {}; 안됨
a= undefined; //됨 undefined만 넣을 수가있으

//undefined 반환해야됌
function func3(): undefined {
    console.log(1);
    return undefined;
}

//null 반환해야됌
function func4(): null {
    console.log(1);
    return null;
}

//반환 안해도됨
function func5(): void {
    console.log("0");
}




//never
//never -> 존재하지않은 
//불가능한 타입
function func6():never {
    while (true) {
    
    }
}

//이건 유용하게 쓸듯
function func7():never {
    throw new Error();
}