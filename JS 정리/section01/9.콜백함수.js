// 콜백함수
// : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미한다.
// : 원하는 타이밍에 실행 가능

// 1. 콜백함수
function main(value) {  // 💡매개변수 value에는 sub 함수 들어간다.
    value();            // sub 출력
}

function sub() {
    console.log("sub");
}

main(sub);  // 💡 main이라는 다른 함수에 인수로써 전달된 다른 함수를 콜백함수라고 한다.

// 💡 함수 자체를 함수 호출에 넣어서 작성 가능 (익명함수, 화살표 함수)
// main(() => {
//     //console.log("i am sub");
// });


// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});