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




