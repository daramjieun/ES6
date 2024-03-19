// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 "조건을 만족하는 요소들만" 필터링하여 "새로운 배열"로 반환
// 특정 조건에 맞는 것을 검색, 카테고리별 필터에 많이 사용 ✨

let arr1 = [
    { name: "이지은", hobby: "독서" },
    { name: "콩두부", hobby: "잠자기" },
    { name: "홍길동", hobby: "돌아다니기" },
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "잠자기"
);

// 2. map
// 배열의 모든 요소를 "순회"하면서, 각각 "콜백함수를 실행"하고 그 결과값들을 모아서 "새로운 배열"로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log(mapResult1); // (3) [2, 4, 6] 0: 2, 1: 4, 2: 6

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 원본 배열
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if (a > b) {
        // a가 b 앞에 와라 
        return -1;  // -> b, a 배치
    } else if (a < b) {
        // b가 a 앞에 와라
        return 1;   // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라 (값이 같을 때)
        return 0;   //->  a, b 자리를 그대로 유지
    }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 "새로운 배열"을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted(); // a b c

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
// 기본 ,(쉼표)
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined);