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

// 과제 1 (array)
// 배열은 복사가 될까?
let fruits = ["사과", "배", "오렌지"];

// 배열을 복사 한 후, push 메서드를 이용해 새로운 값을 추가.
let shoppingCart = fruits;
shoppingCart.push("바나나"); // (4)
// fruits에 어떤 값이 들어 있을까?
alert(fruits.length); // (4)
// ⭐️ 배열은 객체 !! , shoppingCart 와 fruits는 모두 같은 "배열" 참조함 (JS에서 배열은 배열이 아니다?) ⭐️

/*
🙋🏻‍♂️ 배열과 관련된 연산 🙋🏻‍♂️🙋🏻
1. 요소 "Jazz","Blues"가 잇는 styles 배열 생성
2. "Rock-n-Roll"을 배열 끝에 추가
3. 배열 정 중앙에 있는 요소를 "Classics"로 바꿈 , 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 됩니다.
4. 배열의 첫 번째 요소를 꺼내서 출력
5. "Rap" 과 "Reggae"를 배열의 앞으로 추가
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
aalert(styles.shift());
styles.unshift("Rap", "Reggae");

// 배열 컨텍스트에서 함수 호출하기 : 아래코드 실행하면 어떤결과? 이유는?
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); //  arr[2]() 를 호출하는 것은 "obj"가 "arr"이고, "method" 는 "2"인 메서드 // 즉, arr[2]에 있는 함수가 객체 메서드처럼 호출, 따라서 arr[2]는 arr를 참조하는 "this"를 받고, 배열을 출력
// 배열은 초기 2개의 값에, 함수가 추가되어 총 3개의 값을 가진다.

// 🙋🏻‍♂️ 입력한 숫자의 합 구하기 🙋🏻‍♂️
// 아래 조건을 만족하는 함수 "sumInput()" 을 작성
/* 
"prompt" 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 뒤, 입력받은 값들을 배열에 저장
숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 'cancel'버튼을 누르면 질문을 멈춤
배열 요소의 합을 계산하고 리턴합니다.

주의: 숫자 '0'은 유효한 숫자이므로, 사용자가 '0'을 입력하더라도 질문이 멈추지 말아야 합니다.
*/

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("숫자를 입력해 주세요.", 0);

    //입력받는 것을 정지해야 하는 경우
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());

//해설 : "+value"로 입력받은 값을 숫자형으로 변경한 이후엔, 빈 문자열(정지 신호)을 "0(유효한 숫자)"과 구분할 수 없기 때문에, "prompt" 직후에 "value"를 숫자로 변환하지 않고 나중에 숫자로 변환.

// 과제 2 (arry-methods)
border-left-width를 borderLeftWidth로 변경하기
function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

// 특정 범위에 속하는 요소 찾기
// 배열 arr의 요소 중 "a"이상 "b"이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr,a,b)를 작성
let arr = [5,3,8,1];
let filtered = filterRange(arr,1,4);

alert(filtered); // 3,1 (조건에 맞는 요소)
alert(arr); // 5,3,8,1(기존 배열은 변경되지 않습니다
// =>
function filterRange(arr,a,b) {
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [ 5,3,8,1];
let filtered = filterRange(arr,1,4);

alert(filtered); // 3,1 (조건에 맞는 요소)
alert(arr); // 5,3,8,1(기존 배열은 변경되지 않습니다

// 특정 범위에 속하는 요소 찾기(배열 변경)
let arr = [5,3,8,1];
filterRangeInPlace(arr,1,4); // 1과 4 사이에 있지 않은 요소는 모두 제거함
alert(arr); // [3,1]
// =>
function filterRangeInPlace(arr,a,b) {
  for(let i =0; i< arr.length; i++) {
    let val = arr[i];
    
    // 범위 밖의 요소를 제거함
    if( val < a || val > b) {
      arr.splice(i,1);
      i--;
    }
  }
}
let arr = [5,3,8,1];
filterRangeInPlace(arr,1,4); // 1과 4 사이에 있지 않은 요소는 모두 제거함
alert(arr); // [3,1]

// 내림차순으로 정렬하기

let arr = [5,2,1,-10,8];

// 요소를 내림차순으로 정렬해주는 코드를 여기 작성
arr.sort((a,b) => b-a);
alert(arr);

// 배열 복사본을 정렬
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScirpt
alert(arr); // HTML, JavaScript, CSS (no changes)

// =>
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

// 이름 매핑하기 
// 'name'을 나타내는 프로퍼티를 가진 객체 "user"가 담긴 배열이 있습니다. 'name'의 값만 담은 새로운 배열을 만들어주는 코드를 작성
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];
let names = users.map(item => item.name);

alert(name); // John, Pete, Mary