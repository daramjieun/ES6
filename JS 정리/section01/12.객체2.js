// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// => 💡기존 객체에 있는 값을 추가, 수정, 삭제 가능
// const(상수)는 새로운 값을 할당하지 못하는 변수이다.
// 객체에 저장된 프로퍼티의 값을 조작하는 건 아무런 문제가 되지 않는다.

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// => "값이 함수"인 프로퍼티를 말함
// 💡 함수라서 호출도 가능

const person = {
    name: "이정환",
    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();