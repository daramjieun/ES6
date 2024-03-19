// 배열 메서드 1.순회와 탐색

// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 "순회"하면서, 각각의 요소에 "특정 동작"을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {    // 현재 요소의 값, 현재 반복 카운트, 전체 배열의 값
    console.log(idx, item * 2);   // 0 2, 1 4, 2 6
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);    // (3) 2 4 6

// 2. includes
// 배열에 "특정 요소가 있는지" 확인하는 그런 메서드
// 불리언으로 반환
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);  // false

// 3. indexOf
// => 특정 요소의 "인덱스(위치)"를 찾아서 반환하는 메서드
// 같은 값이 여러 개일 때 배열의 가장 앞쪽에 있는 것을 반환
// => 값이 존재하지 않으면 -1 반환

let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);

let objectArr = [
    { name: "이지은" },
    { name: "콩두부" },
];

console.log(
    objectArr.indexOf({ name: "이지은" })   // -1
);

console.log(
    objectArr.findIndex(
        (item) => item.name === "이지은"    // 0 (인덱스 위치 출력)
    )
);

// 4. findIndex
// 모든 "요소를 순회"하면서, "콜백함수를 만족(참반환)"하는 그런
// 특정 요소의 "인덱스(위치)"를 반환하는 메서드
// 값이 존재하지 않으면 -1 반환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
    (item) => item === 999
);

console.log(findedIndex);

// => indexOf는 "얕은 비교"로 동작한다.(=== 동등비교연산자로 비교, 참조값으로 비교)
// 그래서 indexOf로는 특정 객체 값을 찾아내지 않는다.
// => 그래서 findIndex로 특정 프로퍼티를 비교할 수 있기 때문에 
// => 복잡한 객체 값도 조건식만 잘 만들어 주면 쉽게 잘 찾아낼 수 있다.

// 5. find
// 모든 요소를 "순회하면서 콜백함수를 만족"하는 요소를 찾는데, "요소를 그대로 반환"

let arr5 = [
    { name: "이정환" },
    { name: "홍길동" },
];

const finded = arr5.find(
    (item) => item.name === "이정환"
);

console.log(finded);     // 객체 자체가 반환