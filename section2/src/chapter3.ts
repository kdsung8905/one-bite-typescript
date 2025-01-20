// object
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "김"
}

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌",
    color: "brown"
}

user.id;

//이렇게 아이디를 넣을지 말지 모르는 객체일 떄는 
//id? 로 선언하면 됌
user = {
    name: "홍",
}


let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY"
}


//만약 아래와 같이 key를 변경 하면 안되는 경우
//readonly 를 앞에 적어주자.
//config.apiKey = "abc";