//////////////////////////////////////  ARRAY    /////////////////////////////////////

const myArr = [0,1,2,3,4,5]
console.log(myArr);
console.log(typeof myArr); // object

  
let myArr2 = new Array(5,4,3,2,1,0)
console.log(myArr2);
console.log(typeof myArr2); // object

/////////////////////////////////////   ARRAY-METHODS   ///////////////////////////////

myArr2.push(2);
myArr2.pop()
console.log(myArr2);
 
myArr2.unshift(2);
myArr2.shift();
console.log(myArr2);

console.log(myArr2.includes(2));
console.log(myArr2.includes(9));
console.log(myArr2.indexOf(1));
console.log(myArr2.indexOf(9));

///////////////////////////////////////   SLICE and SPLICE  /////////////////////////////////////

const sli1 = ["yellow", "orange", "red", "purple", "baby-pink","white"];
let sli2 = sli1.slice(1,4);
console.log(sli1);
console.log(sli2); // slice orignal array se koi chhed chhad nhi krta

const spli1 = ["yellow", "orange", "red", "purple", "baby-pink","white"];
let spli2 = spli1.splice(1,4);
console.log(spli1);
console.log(spli2); // splice orignal array ko hi change/manipulate kr deta hai



//  ARRAY PART-2 :-->

let score1 = 1000;
let score2 = 1000;
let score3 = 1000;
let score4 = 1000;

console.log(Array.of(score1, score2, score3, score4)); 

const my_job_roles = ["Software-Developer", "Software-Engineer", "Web-Developer", "Frontend-Developer"];
const my_dream_job_place = ["Hyderabad", "dubai", "singapore", "Bangalore"];

const myNewList = my_job_roles.concat(my_dream_job_place);

console.log(myNewList);

let my_dream_list = [...my_dream_job_place, ...my_job_roles]; // this is a spread method

console.log(my_dream_list);





