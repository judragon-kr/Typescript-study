/*  
    결론
    Math.random.toString.substring
     1. 부동소수점 생성, Ex) 0.7874811956232431
     2. toString을 36진수로 설정, 부동소수점을 36진법으로 변환
     3. substring으로 원하는 길이만큼의 문자열을 반환
*/
let randomString = (Math.random() + 1).toString(36).substring(7);

/*
    Math.random()
     - 부동소소점 난수 생성, 기본값으로 0보다 크거나 같고 ~ 1 미만 범위로 설정
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    Math.random() * max
     - 0 ~ max 미만까지 범위 생성
    Math.random() * (max - min) + min
     - min ~ max 범위의 난수 생생, 음수 동일하게 적용

*/
let randomNumber = Math.random();
console.log(randomNumber);

/*
    toString(radix)
     - radix: 숫자를 어떤 진법으로 표현할지를 지정하는 값
     - https://non-stop.tistory.com/270 // 소수점 진법 변환
     - https://m.blog.naver.com/wwoxo/222682007806
*/
let exampleNumber = 0.7874811956232431;
console.log(`Random float number to base36: ${exampleNumber.toString(36)}`); // 0.7874811956232431 -> 0.sckq0kkc1

/*
    substring(start, end)
     - string 객체의 시작 인덱스부터 종료 인덱스 전까지 문자열의 일부분을 반환
     - 0.7874811956232431
*/
console.log(`Random String: ${exampleNumber.toString(36).substring(7)}`); //  0.7874811956232431 -> 0.sckq0kkc1 -> kkc1
