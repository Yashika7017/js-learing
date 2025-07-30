// const coding = ["js", "java", "c++", "python", "SQL", "My SQL", "ruby", "c#"];

// const value = coding.forEach ( (n) => {
//      console.log(n);
//      return n ;
// });
// console.log(value);


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const new_num = num.filter( (items) => {
//     return items > 2
// } );
// console.log(new_num);

// const my_num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const hi = my_num.filter( (i) => {
//     return i > 2;
// } );
// console.log(hi);

//////////////////////////////////////// PRACTICE :->  

const my_books = [
    {title : "BookOne", genre : "Science", Publish : 1981, edition : 1989 },
    {title : "BookTwo", genre : "History", Publish : 1991, edition : 2005 },
    {title : "BookThree", genre : "Phycology", Publish : 1981, edition : 1997 },
    {title : "BookFour", genre : "Mathematics", Publish : 1995, edition : 2000 },
    {title : "BookFive", genre : "Art", Publish : 2000, edition : 2012 },
    {title : "BookSix", genre : "Science", Publish : 1999, edition : 2008 },
    {title : "BookSeven", genre :"HIstory", Publish : 1888, edition : 1899 },
    {title : "BookEight", genre : "Mathematics", Publish : 2001, edition : 2009 },
    {title : "BookNine", genre : "Art", Publish : 1778, edition : 1789 },
    {title : "BookTen", genre : "Science", Publish : 1989, edition : 1999 },
    {title : "BookEleven", genre : "History", Publish : 2002, edition : 2021 }
]

let newBooks = my_books.filter ( (bk) => {
    return bk.genre === "Art";
} );
// console.log(newBooks);

newBooks = my_books.filter( (bk) => {
    return bk.genre ==="Science" && bk.Publish >= 1989
} );
// console.log(newBooks);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.map( (i) => {
    return i + 10
} );
// console.log(newNum);

/////////////////////////////  CHAINING METHOD :-->

// const num = [1, 2, 3, 4, 5,6, 7, 8, 9, 10]
// const new_num = num
// .map( (n) => {return n * 10} )
// .map( (n) => {return n + 1} )
// .filter( (n) => {return n >= 20} )
// console.log(new_num);

/////////////////////////////////////  reduce   /////////////////////// 

// const value = [1, 1, 1, 1];
// const newValue = value.reduce(function (acc, currval) {
//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc + currval 
// },0 )
// console.log(newValue);


// const value = [1, 1, 1, 1];
// const newValue = value.reduce( (acc, currval) => {
//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc + currval 
// },0 )
// console.log(newValue);

const myValue = [
    {
        courseName : "java",
        price : 999
    },
    {
        courseName : "Data-Science",
        price : 1999
    },
    {
        courseName : "Mobile-Application",
        price : 2999
    },
    {
        courseName : "Artificial Intellijence",
        price : 5898
    },
    {
        courseName : "JavaScript",
        price : 5999
    }
    , 
    {
        courseName : "BackEnd",
        price : 12999
    }
];
const total = myValue.reduce( (acc, currval) => acc + currval ,0 )
console.log(total);


