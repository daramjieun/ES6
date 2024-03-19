// 조건문
// : 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// : 대표적으로 if, switch 조건문이 존재한다.

// 1️⃣ 복잡한 여러 개의 조건을 이용하고 싶을 때 if문 이용
// 2️⃣ 어떠한 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶다면 switch문

// 1. if 조건문 (if문)

// if (참이면)
// else if (조건 추가, 전에 조건이 거짓일 때 실행, 갯수 제한 없음)
// else (거짓이면)

let num = 4;

if (num >= 10) {
    //   console.log("num은 10 이상입니다");
    //   console.log("조건이 참 입니다!");
} else if (num >= 5) {
    //   console.log("num은 5 이상입니다");
} else if (num >= 3) {
    //   console.log("num은 3 이상입니다");
} else {
    //   console.log("조건이 거짓입니다!"); 
    //    전부 거짓일 때 실행
}

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl";

switch (animal) {   // 비교하고 싶은 변수 넣는다.💡
    case "cat": {
        console.log("고양이");
        break;  // 일치하는 코드만 실행시키기 위해 필수적으로 break 작성💡
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    }
    default: {    // 어떠한 코드에도 해당되지 않을 때 실행💡
        console.log("그런 동물은 전 모릅니다");
    }
}