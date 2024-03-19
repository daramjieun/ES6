// 배열 메서드 1.요소 조작

// 6가지의 요소 조작 메서드

// 1. push
// 배열의 "맨 뒤"에 새로운 요소를 "추가"하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);  // 1 2 3 4 5 6 7
console.log(newLength); // 7 (배열 길이)

// 2. pop
// 배열의 "맨 뒤"에 있는 요소를 "제거"하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2);  // 1 2
console.log(poppedItem); // 3

// 3. shift (느리게 동작💡)
// 배열의 "맨 앞"에 있는 요소를 "제거", 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(arr3);  // 2 3
console.log(shiftedItem); // 1

// 4. unshift (느리게 동작💡)
// 배열의 "맨 앞"에 새로운 요소를 "추가"하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4);  // 0 1 2 3
console.log(newLength2); // 4 (배열 길이)

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 "새로운 배열"로 반환
// 원본 변경 ❌
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);  // 1 5 (시작점부터 마지막 -1까지 잘라냄)
let sliced2 = arr5.slice(2);    // 1 (시작점 부터 끝까지 잘라냄)
let sliced3 = arr5.slice(-3);   // 3 4 5 (뒤에서 부터 3개 자름)

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 "새로운 배열"을 반환
// 원본 변경 ❌
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);   // 1 2 3 4