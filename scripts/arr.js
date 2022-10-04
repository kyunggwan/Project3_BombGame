/* 배열 선언 */
 //let arr = new Array();
//  let arr = [];      //이런 형식으로 만들자.
//  console.log(arr);

// /* 배열 추가 삭제 :뒤에서 */
// arr.push('❤');
// arr.push('✌');
// console.log(arr);

// /* 배열 추가 삭제 :앞에서 */
// arr.pop();
// console.log(arr);

/* 배열 순회, 반복 */
arr = ['🍕','🍔','🍗','🍜',] ; 
//  for(let i = 0 ; i < arr.length; i ++){
//   console.log(arr[i]);
//  }

/* 배열의 length 속성*/
// //배열 비우기
// arr.length = 2;
// console.log(arr);

// arr = [];
// console.log(arr); //원래는 이렇게 버리기 가능


// for(let i of arr){
//   console.log(i); 
//   } 

// /* 배열을 문자열로 반환*/
// arr = ['🍕','🍔','🍗','🍜',] ;
// let arrs =String(arr);
// console.log(arrs);  

// /* 문자열 split하면 배열반환*/
// let arr2 = arrs.split(`,`);
// console.log(arr2);

/* 배열 정렬 */
// let num = [1,3,5,2,4];
// num.sort();     //배열을 바꾼다, 섞는다.
// console.log(num); 

/* 배열 섞기*/
 
 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 
// let nf = num.filter((x) =>  x > 3 );        //함수가 들어가야함
// console.log(nf)


/* 실습 : 합집합, 교집합, 차집합 */
// let setA = [1,2,3,4,5];
// let setB = [4,5,6,7,8];

//얕은 복사 : 주소값 복사
// let setC = setA;
// console.log(`setC => ${setC}`);


// setA[0] = 100;
// console.log(`setC => ${setC}`);

//깊은 복사 : 원본은 두고 복사본 만들기
// setA[0] = 1;
// setC= [...setA];
// console.log(`setC => ${setC}`);


//합집합
// let union = [...setA, ...setB]; 
// console.log(union);

//교집합
// let intersection = setA.filter((item) => setB.includes(item));
// console.log(intersection);

//차집합
// let difference = setA.filter((item) => !setB.includes(item));
// console.log(difference);

let num = [1,3,5,2,4];
num.sort();     //배열을 바꾼다, 섞는다.
console.log(num); 

/* 배열 섞기*/

// const shuffleold = (num) => {

//   for (let i = 0; i < num.length; i++){
//     let idx1 = Math.floor(Math.random()*5); //0~4까지 랜덤수 생성
//     let idx2 = Math.floor(Math.random()*5);
    
//     if (idx1 == idx2) continue;  //같을때는 바꿀필요없으므로 continue
//     //idx1위치의 값과 idx2위치의 값을 바꾸기
//     let temp = num[idx1];
//     num[idx1] = num[idx2];
//     num[idx2] = temp;
//     console.log(num);
    
//     console.log(`idx1 = ${idx1}, idx2 = ${idx2}`);
//   } 
// }
  
// console.log(shuffleold(num));
  


function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffleArray(arr);
console.log(arr);
  