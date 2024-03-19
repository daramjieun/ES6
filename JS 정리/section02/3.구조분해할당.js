// 구조 분해 할당?
// : 배열이나 객체레 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당

// = (기본값 설정)
// : 혹시나 값이 undefined일 경우를 대비해서 설정

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

let {
    age: myAge,     // 💡할당 받을 변수 이름 변경 가능
    hobby,
    name,
    extra = "hello",   // 💡기본값 설정
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 (많이 사용✨✨✨)
const func = ({ name, age, hobby, extra }) => { //💡중괄호 사용해서 받는다.
    console.log(name, age, hobby, extra);
};

func(person);   //💡객체를 넘겨야 한다.