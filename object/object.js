// 객체
/*
JS에는 8가지 자료형이 있다. 7개는 오직 하나의 데이터(문자열,숫자 등)만 담을 수 있어 '원시형(primitive type)'이라 부른다
객체형은 다양한 데이터를 담을 수 있다. 
객체는 JS 거의 모든 면에 녹아있는 개념 !!
객체는 "중괄호 {...}"를 이용해 만들 수 있다.
중괄호 안에는 '키(key): 값(value)' 쌍으로 구성된 프로퍼티를 여러 개 넣을 수 있는데, '키'엔 문자형 '값'엔 모든 자료형이 허용된다.
*/

// <빈 객체를 만드는 방법 두 가지>
1. let user = new Object(); // '객체 생성자' 문법
2. let user = {}; // '객체 리터럴' 문법

//<리터럴과 프로퍼티> 
let user = {            // 객체
    name: "John",       // 키: "name", 값: "John"
    age:30              // 키: "age", 값: 30
};

// '콜론(:)'을 기준으로 왼쪽엔 키 오른쪽엔 값 , 프로퍼티 키는 프로퍼티 "이름"혹은 "식별자"라고 부른다.

// 프로퍼티 값 얻기
alert(user.name); // John
alert(user.age); // 30

// 프로퍼티 값엔 모든 자료형이 올 수 있다. 불린형 프로퍼티 추가 해보자
user.isAdmin = true;

// 'delete' 연산자를 사용하면 프로퍼티 삭제 가능
delete user.age;

// 여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 된다.
let user = {
    name: "John",
    age:30,
    "likes birds": true         //  복수의 단어는 따옴표로 묶어야 된다.
};

// 프로퍼티 끝은 쉼표로 끝날 수 있다.
let user = {
    name: "John",
    age: 30,
}

// ⚠️ 상수 객체는 수정될 수 있다.
// 주의 !! "const"로 선언된 객체는 수정될 수 있다.
const user ={
    name: "John"
};
user.name = "Pete"; // (*)
// *로 표시한 줄에서 오류를 일으키는 것처럼 보일 수 잇지만 그렇지 않다. 'const'는 'user'의 값은 고정하지만, 내용은 고정하지 않는다. user=... 전체적으로 설정하면 오류

// <대괄호 표기법>
//  문법 에러가 발생
user.likes birds = true
// JS는 코드를 이해 못한다. "user.likes" 까지는 이해하다가 "birds"를 만나면 문법 에러를 뱉는다.
//⭐️ "점"은 키가 '유요한 변수 식별자' 인 경우에만 사용가능, 유요한 변수 식별자는 "공백"이 없다. "숫자"로 시작하지 않아야 되고, "$","_"를 제외한 특수 문자가 없어야 한다.⭐️
//⭐️ 키가 유요한 변수 식별자가 아닌 경우엔 점 표기법 대신에 '대괄호 표기법'이라 불리는 방법을 사용가능 , 대괄호 표기법은 키에 어떤 문자열이 있던지 상관없이 동작
let user = {};

// set
user["likes birds"] =true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// 대괄호 표기법 안에서 문자열을 사용할 땐 문자열을 따옴표(""or'')로 묶어줘야 한다.

let key = "likes birds";
//user["like birds"] = true; 와 같다
user[key] = true;

// 변수 'key'는 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경 될수 있다. 코드를 유연하게 작성 가능
let user = {
    name: "John",
    age: 30
};
let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// 변수로 접근
alert(user[key]); // John (프롬포트 창에 "name"을 입력한 경우)

// 점 표기법은 이런 방식은 불가능
let user = {
    name: "John",
    age: 30
};

let key = "name"
alert(user.key); // undefined


// <계산된 프로퍼티> : 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러쌓여 있는 경우, 이를 계산된 프로퍼티 라고 부른다.
// ex:
let fruit  = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
    [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 온다.

};
alert(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력된다.

let fruit  = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag ={};

// 변수 fruit을 사용해 프로퍼티 이름으로 만듬
bag[fruit] = 5; 
// 계산된 프로퍼티가 더 깔끔해 보인다.

// 대괄호 안에는 복잡한 표현식이 올 수도 있다.
let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
// 대괄호 표기법은 프로퍼티 이름과 값의 제약을 없애주기 때문에 (점 표기법)보다 훨씬 강력하다. 다만 작성하는데 번거롭다는 단점이 있다.

// <단축 프로퍼티>
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...등등
    };
}
let user = makeUser("John",30);
alert(user.name); // John

// 'name'만 적어주어도 프로퍼티를 설정 할수있다.
function makeUser(name, age) {
    return {
        name, // name: name 과 같음
        age, //  age: age 와 같음
        // ...
    };
}  

// 한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용 가능
let user = {
    name, // name: name과 같음
    age: 30
};

// <프로퍼티 이름의 제약상황>
// 변수 이름(키)엔 'for','let', 'return' 같은 '예약어'를 사용하면 안된다, 하지만 (객체 프로퍼티)에는 이런 제약이 없다.

// 예약어를 키로 사용해도 괜찮다.
let obj ={
    for: 1,
    let: 2,
    return: 3
};

alert(obj.for+ obj.let + obj.return); // 6

// 문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환
// 키에 숫자 0을 넣으면 문자열 "0" 으로 자동변환 된다.
let obj = {
    0: "test" // "0": "test"와 동일
};

// 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근
alert(obj["0"]); // test
alert(obj[0]); // test (동일한 프로퍼티


// <'in' 연산자로 프로퍼티 존재 여부 확인하기>
// JS객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 "undefiend"를 반환한다는 것
let user = {};
alert(user.noSuchProperty === undefined); // true는 '프로퍼티가 존재하지 않음' 을 의미한다.

// in 연산자를 사용하면 프로퍼티 존재 여부를 확인할 수 있다.
"key" in Object
//ex
let user = {name: "John", age: 30};
alert("age" in user); // user.age가 존재하므로 true가 출력 된다.
alert("blabla" in user); // user.blabla는 존재하지 않기 떄문에 false가 출력 된다.

// 'in' 왼쪽엔 반드시 프로퍼티 이름이 와야 합니다. 프로퍼티 이름은 보통 따옴표로 감싼 문자열
let user = {age: 30};
let key = "age";
alert(key in user); // true, 변수 key에 저장된 값("age")을 사용해 프로퍼티 존재여부를 확인

// 프로퍼티는 존재 하는데, 값에  "undefined"를 할당한 예시
let obj = {
    test: undefined
};
alert(obj.test); // 값이  'undefined' 이므로 , 얼럿 창엔 undefined가 출력 된다.
alert("test" in obj); // 'in'을 사용하면 프로퍼티 유무를 제대로 확인할 수 있다.

// obj.test는 실제 존재하는 프로퍼티. 따라서 'in' 연산자는 정작적으로 'true' 반환

// <for...in> 반복문
// 'for...in' 반복문을 사용하면 객체의 모든 키를 순회할 수 있다.
for(key in object) {
    // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행 합니다.
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for(let key in user) {
    // 키
    alert(key); // name, age, isAdmin
    // 키에 해당하는 값
    alert(user[key]); // John, 30, true
}
// for..in 반복문에서도 'for(;;)'문처럼 반복 변수를 선언 (let key)했다는 점에 주목해 해야된다.
// 반복 변수명은 자유롭게 정할 수 있다. 'for (let prop in obj)' 같이 key 말고 다른 변수명을 사용해도 괜찮다.

// <객체 정렬 방식>
// 객체는 '특별한 방식으로 정렬' , 정수 프로퍼티는 자동으로 정렬, 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬

// 국제전화 나라 번호
let codes = {
    "49": "독일",
    "41": "스위스",
    "44": "영국",
    // ..,
    "1": "미국"
};
for (let code in codes) {
    alert(code); // 1,41,44,49
}
// 나라 번호(키)가 정수이어서 1, 41, 44, 49 순으로 프로퍼티가 자동 정렬되었기 때문에
// ⚠️ 정수 프로퍼티? : 변형없이 정수에서 왔다 갔다 할 수 있는 문자열 의미
// 문자열 "49"는 정수로 변환하거나 변환한 정수를 다시 문자열로 바꿔도 변형이 없기 때문에 정수 프로퍼티, 하지만 '+49'와 '1,2'는 정수 프로퍼티가 아니다.

// 함수 Math.trunc는 소수점 아래를 버리고 숫자의 정수부만 변환합니다.
alert(String(Math.trunc(Number("49"))) ); // '49'가 출력된다. 기존에 입력한 값과 같으므로 정수 프로퍼티
alert(String(Math.trunc(Number("+49"))) ); // '49'가 출력된다. 기존에 입력한 값과 다르므로 정수 프로퍼티 X
alert(String(Math.trunc(Number("1,2"))) ); // '1'이 출력된다. 기존에 입력한 값(1,2)과 다르므로 정수 프로퍼티가 아니다.

// 49(독일 나라번호)를 가장 위에 출력 되도록 하려면 나라 번호가 정수로 취급되지 않도록 속임수를 쓰면 된다. 각 나라 번호 앞에 "+"를 붙인다.
let codes = {
    "+49": "독일",
    "+41": "스위스",
    "+44": "영국",
    // ..,
    "+1": "미국"
};
for (let code in codes) {
    alert(+code); // 49,41,44,1
}