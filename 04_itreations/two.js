//// TABLE OF 2 to 10 help of WHILE LOOP :=>

let i = 1;
while( i <= 10 ){
    i = i +1;
    console.log("The Table of :--> " + i);

    let j = 1;
    while (j <=10) {
        //console.log("this is inner " + j);
        
        console.log(`${i} * ${j} = ${i*j}`);
        
        j = j +1;
    }
    
};
