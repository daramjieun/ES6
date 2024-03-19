// 배열(Array)이란?
// : 여러개의 값을 "순차적"으로 담을 수 있는 자료 형
// => 어떤 타입의 값이든 저장 가능
// => 길이에 한계도 없다.

// 인덱스(Index)
// => 배열의 순서(인덱스)는 0번 부터 시작
//  : 0번이 첫 번째, 1번이 두 번째
// => 인덱스로 배열 요소 접근

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용) ✨✨✨

let arrC = [
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => { },
    {},
    [],
];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";  // 수정
console.log(arrC);