const str = "Yashika";
let myAge = 20 ;
// string interpolation method
console.log(`Hello My name is ${str} and now I'm ${myAge} Years old`);

const companyName = new String ("Google");
console.log(companyName);

console.log(companyName.charAt(4));
console.log(companyName.indexOf("g"));
console.log(companyName.__proto__);
console.log(companyName[1,2]);
console.log(companyName[0,1,2]);
console.log(companyName.toUpperCase());


const name = "Yashika Varshney";
let age = 20;
let course = "B.Tech [(C.S.E) final year student]"
const myStr = (`Hello my name is ${name}. I'm ${age} years old.I'm currently in ${course} `)
console.log(myStr);
console.log(myStr.length);
console.log(myStr.slice(0,3));
console.log(myStr.toUpperCase());
console.log(myStr.toLocaleLowerCase());
console.log(myStr.toLocaleUpperCase());
console.log(myStr.toString());

console.log(myStr.indexOf("Yashika"));
console.log(myStr.lastIndexOf("Yashika"));

console.log(myStr.includes("Hello" ));
console.log(myStr.trim(myStr));

