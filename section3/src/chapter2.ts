/**
 * Unknown 타입
 */

//unknown 타입은 모든 타입에서 업케스팅하여 사용 할 수 있음(다운캐스팅은 안댐~)
function unknownExam(){

    //업캐스팅
    let a: unknown = 1;
    let b: unknown = "1";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;


    let unknownVar: unknown;
    
    //다운캐스팅
    //let num: number = unknownVar
    //let str: string = unknownVar
}



/**
 * never 타입(공집합)
 */

function neverExam(){
    function neverFunc(): never {

        //반환하는게 아무것도 없다~
        while(true){}
    }


    //never는 모든 타입의 서브타입이기 떄문에 업캐스팅 가능함!!
    let num: number = neverFunc();
    let str: string = neverFunc();

    //반대로 다운캐스팅은 안됨
    //let never1: never = 1;
    //let never2: string = "1";
}

/**
 * void 타입
 * 
 */

function voidExam(){
    function voidFunc(): void{
        console.log("1");

        //업캐스팅 -> void 는 undefinded의 슈퍼타입임
        //return undefined;
    }

    //업캐스팅
    let voidVar: void = undefined;

}


/**
 * any 타입
 *
 */

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefindedVar: undefined;
    let neverVar: never;

    //unknown 다운캐스팅이 가능함 
    anyVar = unknownVar

    //이것도 됨. => 타입계층도를 완전 무시
    //왠만하면 사용하지 말자
    undefindedVar = anyVar;


    //이것만 안됨!! never는 정말 순수한 공집합이기 떄문에 
    //어떤 타입도 다운캐스팅이 불가능함
    //neverVar = anyVar;

    

}