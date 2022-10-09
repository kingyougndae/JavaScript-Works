// 과제 (let, const)

/*

변수 가지고 놀기 
1. admin 과 name 이라는 변수를 선언
2. name에 값으로 "John" 할당
3. name의 값을 admin으로 복사
4. admin의 값을 alert 창에 띄워라 => "John" 출력

*/
let = "admin";
let = "name";
name = "John";
admin = name;

alert(admin); // "John"

/*

올바른 이름 선택
1. 현재 우리가 살고있는 행성의 이름을 값으로 가진 변수 만들기.
2. 웹사이트 개발 중이라고 가정, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수 만들기. 변수이름은 ?

*/
let ourPlantName = "Earth";
let currentUser = "John";

/*

대문자 상수 올바로 사용하기 
코드 평가
*/

const birthday = "17.09.1992";
const age = someCode(birthday);

const BIRTHDAY = "17.09.1992"; // 하드 코딩한 값, 실행 전 이미 값을 알고, 코드에 직접 그 값을 쓴다 (변하지 않는다.)
const age = someCode(BIRTHDAY); // age는 런타임, 올해와 내년의 나이는 다르다. age는 대문자 상수에 적합하지 않다.
