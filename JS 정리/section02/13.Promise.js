// Promise란?
// : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// : Promise는 비동기 작업을 감싸는 객체이다.
// 1. 비동기 작업 실행 ✔️
// 2. 비동기 작업 결과 관리 ✔️
// 3. 비동기 작업 결과 저장 ✔️
// 4. 비동기 작업 병렬 실행
// 5. 비동기 작업 다시 실행 etc...

// API 호출, 다른 서버와 통신

// Promise의 3가지 상태
// 대기 (Pending) : 아직 작업이 완료되지 않은 상태
// 해결 (resolve) ➡️ 성공 (Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 거부(reject) ➡️ 실패 (Rejected) : 비동기 작업이 실패한 상태

function add10(num) {
    const promise = new Promise((resolve, reject) => {  // 성공 상태, 실패 상태 매개변수
        // 비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise; // 해당 Promise 객체 반환
}

// then 메서드 (성공)  => 그 후에
// catch 메서드 (실패)

// promise 체이닝 : then과 catch를 연결해서 사용

add10(0)    // add10 함수 호출하고 인수로 0 전달
    .then((result) => { // Promise의 결과값을 매개변수로 받음 (성공)
        console.log(result);    //10
        return add10(result);
    })
    .then((result) => {
        console.log(result);    //20
        return add10(undefined);    // catch 실행
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {     // Promise가 실패했을 때 콜백함수 실행 (실패)
        console.log(error);
    });