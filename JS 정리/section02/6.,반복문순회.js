// 순회(Iteration)이란?
// : 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

// 💡 for of :  배열 순회
// 💡 for in : 객체 순회

// 1. 배열 순회

let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {  // length (길이)
    console.log(arr[i]);    // 1 2 3
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {  // length (길이)
    console.log(arr2[i]);    // 4 5 6 7 8
}

// 1.2 for of 반복문
for (let item of arr) {
    console.log(item);  // 1 2 3
}

// 2. 객체 순회
let person = {
    name: "이지은",
    age: 29,
    hobby: "독서",
};

// 2.1 Object.keys 사용
// => 객체 "key 값"들만 뽑아서 "새로운 배열"로 반환
let keys = Object.keys(person);

for (let key of keys) {
    const value = person[key];  // 프로퍼티
    console.log(key, value);    // name 이지은 age 29 hobby 독서
}

// 2.2 Object.values 사용
// => 객체에서 value 값들만 뽑아서 "새로운 배열"로 반환

let values = Object.values(person);

for (let value of values) {
    console.log(value);     // 이지은 29 독서
}

// 2.3 for in
for (let key in person) {
    const value = persin[key];
    console.log(key, value);    // name 이지은 age 29 hobby 독서
}