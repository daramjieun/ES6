// JavaScript의 자료형(Data Type) - 원시 타입, 객체 타입

// 원시 타입 : number, string, boolean, null, undefined
// 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

// 템플릿 리터럴 문법 ✨
// `${변수명}`
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
// 프로그래머가 명시적으로 할당
let empty = null;

// 5. Undefined Type
// 변수에 미처 값을 할당하지 못했거나, 존재하지 않는 값을 넣었을 때 발생
let none;
console.log(none);