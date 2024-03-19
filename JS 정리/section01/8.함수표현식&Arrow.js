// 1. 함수 표현식 
// => 값으로 함수 생성

function funcA() {
    //   console.log("funcA");
}

let varA = funcA;   // 💡 함수 자체를 변수에 담아서 사용할 수 있다.
varA();

let varB = function () {    // 💡 익명 함수
    //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));

// 💡 값을 반환하기만 한다면 return문과 {} 생략 가능
// 💡 추가 작업이 필요하면 추가 작업 코드와 return문과 {} 작성

// => 매개변수를 아무 것도 받지 않고 출력만 한다.
// let varC = () => 1;
// console.log(varC());

// => 매개변수를 받아서 출력한다.
// let varC = (value) => value + 1;
// console.log(varC(10));           // 11