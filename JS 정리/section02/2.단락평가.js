// 단락 평가?
// 첫 번째 피연산자의 값만으로도 논리연산자의 결과 확정된다면
// => 두 번째 피연산자에 접근하지 않음

// 즉, 첫 번째 연산에 값에 접근할 수 있다면 두 번째 피연산자에 접근 ❌
// 단락 평가를 이용하면 조건문을 이용하지 않고도 
// 특정 상황에서 어떤 함수를 호출하지 않도록 방지해 주거나
// 어떤 값들을 굳이 계산하지 않도록 제한 가능

// 💡 AND 연산자는 앞에 게 truthy 값이면 뒤로 넘어간다.
// => 앞에 게 truthy 값이 아니면 멈춘다.

// 💡 OR 연산자는 앞에 게 falsy 값이면 뒤로 넘어간다.
// => 앞에 게 falsy 값이 아니면 멈춘다.

let varA = false;
let varB = true;

// AND 연산자
console.log(varA && varB);

// OR 연산자
console.log(varB || varA);

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "콩두부" });