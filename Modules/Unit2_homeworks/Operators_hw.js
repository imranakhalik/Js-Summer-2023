//Artithemetic Operators
let num1 = 7;
let num2 = 14;
let sum = num1 + num2;
console.log(`total of num1 and num2 is ${sum}`); //21


//let radius = 8;
//let area = 3.14 * (radius ** 2); //3.14 * (8 **2)
//console.log(`${area}`);

//Assignment Operators

let num = 5;
console.log(num);

num += 2
console.log(num);

let makeupPrice = 10;
console.log(`${makeupPrice}`);
makeupPrice *= 2.5;
console.log(`${makeupPrice}`);

//Comparsion Operators
let age1 = 25;
let age2 = 15;
console.log(`${age1 > age2}`);

let name1 = 'Tyelor Des'
let name2 = 'John Doe'
console.log(name1 !== name2); // should be true 

//Logical Operators
    //Declear two variable isMember and hasCoupon
let isMember = true;
let hasCoupon = false;

let freeShopping = isMember || hasCoupon;
//print the value off freeshipping
console.log(`Custome is eligible for free shopping ${freeShopping}`);

let num5 = 10;
// simple way to write it:
let num11 = 10;
let num12 = 0;
console.log(num11 !== num12);

//using 'if' function:

if(num !==0) {                  
    console.log("True");           //it will print true b/c number value is 0 it is not 10
}
else{
    console.log("False")           //if the number value was same as varible num5 value it will print false 
}



//Conditional (Ternary) Operator:
//example 1
let age = 17
let canVote = age >= 18 ? 'You are old enough to vote' : 'You are not old enough to vote'
console.log(canVote);

//example 2 :simple way
let price = 20;
let productSale = price <= 30 ? 'The product is on sale': 'The product is not on sale'
console.log(productSale);

