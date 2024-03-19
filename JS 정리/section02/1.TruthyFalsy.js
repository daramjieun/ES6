// Truthy & Falsy란?
// : 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// => Falsy한 값 (참 같은 값)
// => Truthy 한 값 (거짓 같은 값)
// => 💡 이를 이용하면 "조건문"을 간결하게 만들 수 있음

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 웹 개발 중에 잘 이용하지 않는다.

if (!f4) {
    console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

// 3. 활용 사례
// person이 undefined면 조건문에 !로 참이 되어 if문 출력
// person이 undefined가 아니면 if문 다음의 콘솔 출력
// => 💡비효율적인 코드를 간결하게 개선

function printName(person) {
    if (!person) {  //💡부정연산자
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name: "콩두부" };
printName(person);