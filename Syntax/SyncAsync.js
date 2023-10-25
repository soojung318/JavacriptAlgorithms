/*
    동기란,
    하나의 작업이 실행되는 동안은 다른 작업을 동시에 진행하지 않는 방식
    앞의 작업이 종료된 이후 다음 작업을 진행할 수 있는 순차적인 방식
    자바스크립트는 순서대로 출력되는데 그 이유는 코드가 동기적으로 처리되었기 때문임.

    블로킹 : 하나의 스레드에서 여러 작업을 동시에 처리하지 않고 하나의 작업이 종료된 이후에
    다른 작업을 처리할 수 있는 방식.

    자바스크립트는 싱글 스레드 방식, 즉 하나의 스레드만으로 동작하기 때문에
    멀티스레드 방식으로는 작동할 수 없다. 그렇다고 동기적으로만 처리하면 작업 시간이 굉장히
    길어지게 된다. 따라서 이 동기적 처리의 문제점을 해결하기 위해 하나의 스레드에서 여러 작업들을
    동시에 처리하는 비동기 처리로 작업을 수행할 수 있다.


    비동기 처리란,
    여러 작업들을 동시에 진행하는 방식
    동기적 처리와는 반대로 어떠한 작업이 종료되길 기다리지 않고 그 다음 작업도 동시에 진행하는 방식이다.

    논-블로킹 : 하나의 스레드에서 여러개의 작업을 동시에 처리할 수 있는 방식

    자바스크립트 비동기 처리 내장 함수 : setTimeout(callback 함수, delayTime) >> 2개의 매개변수가 들어간다.

*/
// 비동기 내장함수(setTimeout)를 사용한 예제, 비동기에 대한 감 잡기.
setTimeout(() => {
    console.log("3초만 기다리세요");
}, 3000);

console.log("종료");
/*
    "종료"가 먼저 출력된다.
    이유 : setTimeout 함수가 비동기 함수이기 때문.
    그래서 콜백함수(3초)가 실행 종료될 때까지 (즉, 3초를 기다리지 않고)
    기다리지 않고 아래에 적힌 console.log가 실행되었다.
    (동기였다면 3초를 기다린다.)
*/


// 비동기, 동기 방식 이해하기 - A~C:비동기함수, D:동기함수
const workA = () => {
    setTimeout(() => {
        console.log("workA");
        callback();
    }, 5000);
};

const workB = () => {
    setTimeout(() => {
        console.log("workB");
        callback();
    }, 3000);
};

const workC = () => {
    setTimeout(() => {
        console.log("workC");
        callback();
    }, 10000);
};

const workD = () => {
    console.log("workD");
};

workA(); //3
workB(); //2
workC(); //4
workD(); //1 순으로 출력

// 결론: 이렇게 이전 작업이 끝날 때까지 기다리지 않고 다음 작업이 동시에 진행되는 방식을 비동기처리라고 한다.