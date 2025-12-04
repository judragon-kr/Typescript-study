/*
    setTimeout
    - 일정 시간이 지난 후 "한 번만" 함수를 실행
    - 비동기적으로 동작
*/
setTimeout(() => {
  console.log("1초 후 한 번만 실행!");
}, 1000);

/*
    setInterval
    - 일정 시간마다 "반복해서" 함수를 실행
    - 반복을 멈추려면 clearInterval 필요
*/
const intervalId = setInterval(() => {
  console.log("1초마다 반복 실행!");
}, 1000);

// 5초 후 반복 중지
setTimeout(() => {
  clearInterval(intervalId);
  console.log("반복 중지!");
}, 5000);
