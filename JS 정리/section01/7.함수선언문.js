// 함수?
// : 중복으로 작성된 유사한 기능을 하는 코드를 일일이 타이핑하면 생산성(가독성, 유지보수)이 떨어진다.
// => 여기 저기 자주 사용되는 유사한 코드를 묶어서 이름을 붙여 사용한다.
// => 함수의 이름만 불러서 사용

// 💡함수 선언 : 호출 전에 미리 작성해 두는 것
// 💡함수 호출 : 함수이름()
// 💡인수 : 함수를 호출하면서 함수에 전달하는 값
// 💡매개변수 : 전달된 인수들을 순서대로 저장하는 변수 (매개체 역할)
//           => 내부에서 매개변수 사용
// 💡return : 반환값, 함수는 return 이후에 작성된 값을 반환한다.
//           => 함수 호출의 결괏값
//           => 외부에서 변수에 담아 활용 가능

// 함수
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
    function another() {
        // 중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;

    return area;
}