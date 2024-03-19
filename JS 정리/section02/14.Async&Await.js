// async와 then 메서드를 사용하면 더이상 then 메서드를 복잡하게 사용하지 않아도 된다.
// 비동기 작업을 동기 작업으로 처리하듯이 간결하게 작성 가능 

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

// 함수 선언문 앞에 "async" 붙여주면 비동기 함수로 바뀐다.
// => 객체를 그대로 반환하는 함수가 아니라 
// => 이 객체를 결괏값으로 갖는 새로운 Promise를 반환하는 함수로 변환

// 💡 Primise로 반환 (동기=> 비동기)
// async function getData() {
//     return {
//         name: "이지은",
//         id: "daramji",
//     };
// }

// 💡 애초에 promise를 반환하는 함수 (async가 별 다른 일을 하지 않음)
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이지은",
                id: "daramji",
            });
        }, 1500);
    });
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();   // promise가 종료되면 비동기 함수의 결괏값을 data 변수에 넣어준다.
    console.log(data);
}

printData();