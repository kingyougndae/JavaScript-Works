/*
let, const(변수 선언) https://ko.javascript.info/variables

변수(variable)는 데이터를 저장할 때 쓰이는 '이름이 붙는 저장소'
js에선 "let" 키워드를 사용해 변수 생성
'message'라는 이름을 가진 변수를 생성(선언)*/

let massage;

// 할당 연산자 "="를 사용해 변수 안에 데이터 저장
let message;

message = "Hello"; //문자열 저장


//변수의 저장된 값 보기
let message;
message = "Hello!";

alert(message); // 변수에 저장된 값을 보여준다.

// 변수 선언과 값 할당을 한 줄에 작성
let message = "Hello!"; // 변수를 정의하고 값을 할당한다.
alert(message); // Hello!

// 한줄에 여러 변수를 선언하는 것도 가능
let user = "KIM",
  age = 31,
  message = "Hello!"; // ⭐️가독성을 위해 한 줄에는 하나의 변수를 작성하는게 좋다!⭐️

/* 'let'대신 'var'
만들어진지 오래된 스크립트에선 'let' 대신 'var'라는 키워드를 발견하는 경우가 있다.
*/
var message = "Hello!";
// var 는 let 과 거의 동일, var는 오래 된 방식

// 현실 속 비유 : 상자 속엔 어떤 값이든지 넣을 수 있다. (원하는 만큼 값을 변경할 수도 있다.)
let message;
message = "Hello!";
message = "World!"; // 값이 변경

alert(message); // 값이 변경되면, 이전 데이터는 (제거 )

// 변수 두개를 선언하고, 한 변수의 데이터를 다른 변수에 복사할 수도 있다.
let Hello = "Hello World!";
let message;

// Hello의 "Hello World" 값을 massage에 복사
message = Hello;

// 두 변수는 같은 값을 가진다.
alert(Hello); // Hello World!
alert(message); // Hello World!

// ⚠️ 변수를 두 번 선언하면 에러 발생 ⚠️
let message = "This";

// "let" 을 반복하면 에러 발생 ' Uncaught SyntaxError: Identifier 'message' has already been declared CODE'
let message = "That";

//함수형 언어 
함수형(funcional) 프로그래밍 언어는 변숫값 변경을 금지. '상자 속에' 값이  일단 저장되면, 그 값을 영원히 유지, 다른 값 저장 (새 변수를 선언), 이전 변수를 재사용 못 함.


/* 변수 명명 규칙 : JS에선 변수 명명 시 두 가지 제약 사항이 있다. 
1. 변수명에는 오직 문자와 숫자, 그리고 기호 "$" 와 "_" 만 들어갈 수 있다.
2. 첫 글자는 숫자가 될 수 없다.
*/

// 유효한 변수명 예시
let userName;
let test123;

// 여러 단어를 조합하여 변수명을 만들 땐 ⭐️ "camelCase" ⭐️가 흔히 사용.
// 카멜 표기법은 단어를 차례대로 나열하면서 첫 단어를 제외한 각 단어의 첫 글자를 '대문자'로 작성 ex) myVeryLongName

// 달러 기호 "$" 와 밑즐 "_"를 변수명에 사용할 수 있다는 점이 특이하다. 이 특수 기호는 일반 글자처럼 특별한 의미를 지니지 않는다.
// 유효한 변수명에 관한 예시
let $ = 1; // "$"라는 이름의 변수를 선언
let _ = 2; // "_"라는 이름의 변수를 선언
alert($ + _); // 3

//잘못된 변수명의 예시
let 1a; // 변수명은 숫자로 시작 x
let my-name; //변수명에 하이픈이 올 수 없다.

// ‼️ "apple" 와 "AppLE" 은 서로 다른 변수
// ‼️ 비 라틴계 언어도 변수명에 사용할 수 있지만 권장 x

// ⚠️ 예약어 목록에 있는 단어는 변수명으로 사용할 수 없다. (let, class, return, function)
let let = 5; // 'let'을 변수명으로 사용 x 에러
let return =5; // 'return'을 변수명으로 사용 x 에러

// ⚠️ 'use strict' 없이 할당하기

// 참고 : 이 예제에는 " use stirct"가 없습니다.
num = 5; // 변수 'num'이 정의되어있지 않더라도, 단순 할당만으로 변수가 생성
alert(num); // 5

//나쁜 습관, 엄격모드에서 에러 발생
"use strict";

num =5; // error: num is not defined

//상수 : 변화하지 않는 변수를 선언할 땐, 'let' 대신 'const' 사용
const myBirthday = "09.17.1992";

// 'const'로 선언한 변수 = 상수(constant)는 재할당 x ,상수를 변경하려면 에러가 난다.
const myBirthday = "17.09.1992";
myBirthday = "17.09.1992";  // error, cat`t reassign the constant!

// 대문자 상수 : 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습, 이런 상수는 '대문자'와 '밑줄'로 구성된 이름
// 예시로 웹에서 사용하는 색상 표기법 '16진수 컬러 코드'에 대한 상수 만들기
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0f0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 됌.
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*대문자를 상수로 만들어 사용하면 장점
COLOR_ORANGE 는 "#FF7F00" 보다 기억하기가 휠씬 쉽다.
COLOR_ORANGE 를 사용하면 "#FF7F00"를 사용하는 것보다 오타를 낼 확률이 낮다.
COLOR_ORANGE 가 "#FF0FF"보다 훨씬 유의미 , 코드 가독성 증가'
*/

// 일반적인 방식으로 상수럴 명명하고, 언제 대문자를 사용해서 명명?
// '상수'는 변수의 값이 절대 변하지 않는다. 그중에는(빨간색을 나타내는 16진수 값)코드가 실행되기 전에 이미 그 값을 알고있는 상수도 있고, 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수도 있다.
// ex
const pageLoadTime = /* 웹페이지를 로드한느데 걸린 시간*/;
//✔️ 대문자 상수는 '하드 코딩한' 값의 별칭을 만들때 사용하면 된다. ✔️

//바람직한 변수명: 변수명은 간결, 명확, 작성했던 코드를 다시 봤을때 , 정보에 알맞은 이름이 적혀있으면 정보를 더 쉽게 찾을 수 있다. 
/* 
⭐️ 변수 명명시 참고하기 좋은 규칙 ⭐️
'useName' 이나 'shoppingCart' 처럼 사람이 읽을 수 있는 이름을 사용
무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 !, "줄임말이나 a,b,c와 같은 짧은 이름"은 피해라
최대한 서술적이고 간결하게 명명 : date와 value 는 나쁜 예시 , 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할때만 사용
자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user'라고 부르기로 했다면, 이와 관련된 변수를 "currentUser" 나 " newUser "라는 이름 사용

*/

// <요약> let - 모던한 변수 선언 키워드 , var - 오래된 변수 선언 키워드 (잘 사용안함) const - let과 비슷하지만 변수의 값을 변경 할 수 없다.
// 변수명은 변수가 담고 있는 것이 무엇인지 쉽게 알 수 있도록 지어야 된다. 