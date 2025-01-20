//타입 별칭
type User = {
    id: number;
    name: string;
}

let user: User = {
    id: 1,
    name: "kim"
}

let user2: User = {
    id: 2,
    name: "kim2"
}



// 인덱스 시그니처
type CountryCodes = {
    // Korea : 'ko',
    // UnitedState : 'us',
    [key: string] : string;
}


//위의 타입을 사용하면 key, value 가 모두 string 인 경우 입력가능
let contryCodes: CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    Abd : 'dd'
}


type CountryNumberCodes = {
    [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840
}

//아무런 값이 없어도 에러가 안남... type을 정의해놨는데 위반할 객체가 하나도 없으니깐
let countryNumberCodes1: CountryNumberCodes = {};

// 만약 korea는 . 꼭들어가야 한다면 
 
//이럴경우 타입을 아래와 같이 바꿔줘야햄
type CountryNumberCodes2 = {
    [key: string]: number;
    Korea: number; //<- 코리아는 꼭 들어가얌
}