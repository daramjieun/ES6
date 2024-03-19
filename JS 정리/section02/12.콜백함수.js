// 비동기 작업 처리하기 1. 콜백함수

function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;   // 3
        callback(sum);       // 콜백함수에 매개변수 sum 전달해서 출력
    }, 3000);
}

add(1, 2, (value) => {
    console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

// 콜백 지옥
// 인덴트(들여쓰기)가 깊어지는 현상이 나타난다.
// "콜백함수로 받아온 비동기 작업의 결과"를 또다른 "비동기 작업의 인수"로 넣어주는 코드가 반복됨.
// 가독성 안좋음 => Promise로 해결
orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});