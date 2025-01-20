//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}


//이렇게 eunum 에 대한 코드값을 주지 않은 경우에는 알아서 코드를 부여해줌
enum Role1 {
    ADMIN, //0
    USER, //1
    GUEST, //2
}

const user1 = {
    role: Role.ADMIN
}

const user2 = {
    role: Role.GUEST
}

const user3 = {
    role: Role.USER
}


enum Language {
    korean = "ko",
    english = "en"
}