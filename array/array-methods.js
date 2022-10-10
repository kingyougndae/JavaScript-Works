// 배열과 메서드
/*
요소 추가 제거 메서드
<splice>
배열에서 요소를 하나만 지우고 싶으면? "delete"  사용
*/
let arr = ["I","go","home"];
delete arr[1]; // "go"를 삭제
alert(arr[1]); // undefined

// delete를 써서 요소를 지우고 난 후 배열 --> arr =["I", "home"];
alert(arr.length); // 3

// arr.splice(star) 메서드를 사용하면 요소를 추가,삭제,교체 모두 가능
arr.splice(index[, deleteCount, elem1,...,elemN])
//인덱스 조작, deleteCount(제거하고자 하는 요소의 개수) , elem1, ..., elemN(배열에 추가할 요소)

let arr =["I","study","JavaScript"];
arr.splice(1,1); // 인덱스 1부터 요소를 한개를 제거
alert(arr); // ["I","JavaScript"]


// <slice>
arr.slice([start], [end])
// "start" 인덱스부터("end"를 제외 한) "end" 인덱스까지의 요소를 복사한 새로운 배열을 반환.

let arr = ["t","e","s","t"];
alert(arr.slice(1,3)); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사
alert(arr.slice(-2)); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)
// arr.slice()는 인수를 하나도 넘기지 않고 호출하여 "arr"의 복사본을 만들 수 있다. 배열을 건드리지 않고, 배열을 조작해서 새로운 배열을 만들때 사용

// <concat>
// arr.concat은 기존 배열의 요소를 사용해 새로운 배열을 만들거나, 기본 배열에 요소를 추가하고자 할 떄 사용
arr.concat(arg1, arg2...)

// 인수엔 배열이나 값이 올 수 있는데, 인수 개수엔 제한이 없다.
// 메서드를 호출하면 "arr"에 속한 모든 요소와 arg1, arg2 등에 속한 모든 요소를 한데 모은 새로울 배열이 반환
// 인수 argN가 배열일 경우 배열의 모든 요소가 복사. 그렇지 않을경우(단순 값)는 인수가 그대로 복사

let arr =[1,2];

// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열을 만듬
alert(arr.concat([3,4])); // 1,2,3,4

// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어짐
alert(arr.concat([3,4],[5,6])); // 1,2,3,4,5,6

// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
alert(arr.concat([3,4],5,6)); // 1,2,3,4,5,6

// concat 메서드는 제공받은 배열의 요소를 복사해 활용
let arr =[1,2];

let arrayLike ={
    0; "something",
    length: 1
};

alert(arr.concat(arrayLike)); // 1,2,[object 0bject]

// 특수한 프로퍼티 Symbol.isConcatSpreadable 이 있으면 "concat"은 이 객체를 배열 취급, 따라서 객체 전체가 아닌 객체 프로퍼티의 값이 더해짐
let arr = [1,2];

let arrayLike ={
    0; "something",
    1: "eles",
    [Symbol.isConcatSpreadable]: true,
    length:2 
};

alert(arr.concat(arrayLike)); // 1,2 something,else

// forEach로 반복작업 하기
arr.forEach // 주어진 함수를 배열 요소 각각에 대해 실행
arr.forEach(function(item,index,array) {
    // 요소에 무언가를 할 수 있다.
});

// 요소 모두를 얼럿창을 통해 출력해주는 코드
// fir each element call alert
["Bilbo","Gandalf","Nazgul"].forEach(alert);

// 인덱스 정보까지 더해서 출력해주는 정교한 코드
["Bilbo","Gandalf","Nazgul"].forEach((item,index,array) => {
    alert('${item} is at index ${index} in ${array}');
});

// 배열 탐색하기
idexOf, lastIndexOf와 includes // 하는일 같다 , 연산 대상이 문자열이 아닌 배열의 요소라는 점만 다르다.
// arr.indexOf(item,from)은 인덱스 "from"부터 시작해 item(요소)을 찾습니다. 요소를 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 "-1"를 반환
// arr.lastIndexOf(item,from)는 위 메서드와 동일한 기능, 검색을 끝에서부터 시작한다
// arr.includes(item,from)는 인덱스 "from"부터 시작해 "item"이 있는지를 검색하는데, 해당하는 요소를 발견하면 "true"를 반환한다.

// <find 와 findeIndex>
// 특정 조건에 부합하는 객체를 배열 내에서 찾는 방법
arr.find(fn)

let result = arr.find(function(item,index,array){
    // true가 반환되면 반복이 멈추고 해당 요소를 반환
    // 조건에 해당하는 요소가 없으면 undefined 반환
});

// 요소 전체를 대상으로 함수가 순차적으로 호출
// item - 함수를 호출할 요소 , index - 요소의 인덱스 , array - 배열 자기 자신
// ex: id와 name 프로퍼티를 가진 사용자 객체로 구성된 배열 , 배열 내에서 id == 1 조건을 충족하는 사용자 객체 찾기
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "pete"},
    {id: 3, name: "Mary"},
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
// 실무에서 객체로 구성된 배열을 다뤄야 할 일이 많다, "find" 메서드 활용법을 알아두면 좋다

// <filter>
// find 메서드는 함수의 변환 값을 "true"로 만드는 단 하나의 요소를 찾는다. 조건을 충족하는 요소가 여려 개라면 "arr.filter(fn)" 사용
let results - arr.filter(function(item,index,array){
    // 조건을 충족하는 요소는 results에 순차적으로 더해짐
    // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환
});

// ex
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "pete"},
    {id: 3, name: "Mary"},
];

// 앞쪽 사용자 두 명을 반환
let someUser = users.filter(item => item.id < 3);
alert(someUser.length); //2


// <배열을 변형하는 메서드>
// <map>
// arr.map은 유용성과 사용 빈도가 아주 높은 메서드 중 하나 ⭐️ , map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해준다
let result = arr.map(function(item,index,array){
    // 요소 대신 새로운 값을 반환
});

// 각 요소(문자열)의 길이를 출력
let lengths = ["Bilbo","Gandalf","Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// <sort(fn)>
// arr.sort()는 배열의 요소를 정렬 , 배열 자체가 변경
// 메서드를 호출하면 재정렬 된 배열이 반환되는데, 이미 arr 자체가 수정되었기 때문에 반환 값은 잘 사용되지 않는 편
let arr = [1,2,15];

// arr 내부가 재 정렬
arr.sort();
alert(arr); // 1, 15,2
// 1, 15 2 ? why 1,2,15가 아닌가 "요소는 문자열로 취급되어 재 정렬되기 때문에"
// 기본 정렬 기준 대신 새로운 정렬 기준을 만들려면  새로운 함수를 넘겨줘야 된다. + 인수로 넘겨주는 함수는 반드시 값 두개를 비교해야 하고, 반환 값도 있어야 됨
function compare(a,b) {
    if (a >b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
    if (a ==b) return 0; // 두 값이 같은 경우
    if (a <b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// 숫자 오름차순 기준으로 정렬
function compareNumeric(a,b) {
     if (a >b) return 1;
    if (a ==b) return 0;
    if (a <b) return -1;
}
let arr =[1,2,15];
arr.sort(compareNumeric);
alert(arr); // 1, 2, 15

// 더 쉽고 간결하게 나타내고 만들기
let arr = [1,2,15];
arr.sort(function(a,b) { return a - b;});
alert(arr); // 1,2,15

// 화살표 함수 사용
arr.sort((a,b) => a - b);


// <revers> : 역순으로 정렬시켜주는 메서드
let arr =[1,2,3,4,5];
arr.reverse();
alert(arr); // 5,4,3,2,1

 // <split 과 join>
 let names = 'Bilbo, Gandalf, Nazgul';
 let arr = names.split(', ');
 for (let name of arr) {
    alert('${name}에게 보내는 메세지'); // Bilbo에게 보내는 메세지
 }

 // <reduce 와 reduceRight>
 // forEach, for, for..of 를 사용하면 배열 내 요소를 대상으로 반복 작업 가능
 // 각요소를 돌면서 반복 작업을 수행하고, 작업 결과물을 새로운 배열 형태로 얻으려면 "map" 사용
 let value = arr.reduce(function(accumulator, item, idex, array) {
    // ...
 }, [initiall]);

 // reduce 를 이용해 코드 한 줄로 배열의 모든 요소를 더한 값을 구해보자.
 let arr = [1,2,3,4,5];
 let result = arr.reduce((sum, current) ==> sum +current, 0);
 alert(result); // 15

 // reduce에 전달한 함수는 오직 인수 두개만 받고 있습니다. 대게 이렇게 인수를 두 개만 받습니다.
 // 1. 함수 최초 호출 시, reduce 의 마지막 인수인 0(초깃값)이 "sum"에 할당. "current"엔 배열의 첫 번째 요소인 "1"이 할당 = 결과 1
 // 2. 두 번째 호출 시, "sum = 1"이고 여기에 배열의 두 번째 요소(2)가 더해지므로 결과는 "3"
 // 3. 세 번쨰 호출 시 ,"sum = 3"이고 여기에 배열의 다음 요소가 더해진다. 

 // <Array.isArra>로 배열 여부 알아내기 
 // 자바스크립트에서 배열은 독립된 자료형으로 취급되지 않고, "객체형"에 속함, 따라서 "typeof"로는 일반 객체와 배열을 구분할 수가 없다.
 alert(typeof {}); // object
 alert(typeof []); // object
 
 // Array.isArra(value) "value"가 배열이라면 "true", 배열이 아니라면 "false" 반환
 alert(Array.isArra({})); // false
 alert(Array.isArra([])); // true

 // <배열 메서드와 'thisArg'>
 // 함수를 호출하는 대부분의 배열 메서드(find,filter,map sort는 제외)는 "thisArg"라는 매개변수를 옵션으로 받을 수 있다.
 arr.find(func, thisArg);
 arr.filter(func, thisArg);
 // ...
 // thisArg는 선택적으로 사용할 수 없는 마지막 인수
 