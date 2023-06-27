//Quesntion 1: Write a function that takes an array of objects 
//representing books and returns an array containing the titles of those books.

let books = [

{
    title : "Pinch of Yum",
    author : "Kat Jenn",
    
},
{
    title : "To free my thoughts",
    author : "Johnson Sam",
},
{   title : "Savior of the day",
    author : "Ioek Sizz",
    
},
]; 

let findTitle = books.map((bTitle) => bTitle.title)
console.log(findTitle);


//Question 2: Write a function that takes an array of objects representing 
//products and returns an array containing only the products that are currently in stock.

let products = [

    {
       id : 0,
       title : "Pinch of Yum",
       author : "Kat Jenn",
       stock : 4,
           
   },
   {   id : 1,
       title : "To free my thoughts",
       author : "Johnson Sam",
       stock : 3,
   },
   
   {   
       id: 2,
       title : "Savior of the day",
       author : "Ioek Sizz",
       stock : 20
           
   },
   ]; 
       
   
let stockProduct = products.map((pStock)=>pStock.stock)
   
console.log(stockProduct);

//Questin 3:  Write a function that takes an array of objects representing 
//users and returns the first user whose email address matches a given email.

let users = [
    {
        name : 'John Howard',
        email: 'john.Howard@yahoo.com',
    },
    {
        name : 'Kathy Detch',
        email : 'kathy_de@gamil.com',
    },
    {
        name: 'Imrana Khalik',
        email : 'imrana_k@gmail.com',
    },
    ];
    
    let givenEmail = 'khalik_123@gmail.com';
    let findUser = users.find((user)=>user.email===givenEmail);
        if(findUser)
    {
        console.log(findUser);
    }
    else
    {
        console.log(`this ${givenEmail} email does not match given email `);
    }

//Question 4: Write a function that takes an array of objects representing tasks and 
//returns true if all the tasks are marked as complete, otherwise returns false.

let tasks = [
{
    name : 'task 1',
    status : 'incomplete',
},
{
    name : 'task 2',
    status : 'complete',
},
{
    name : 'task 3',
    status : 'complete',
},
];

let taskStatus = tasks.find((checkStatus) =>checkStatus.status==='complete');

if(taskStatus)
{
    console.log(true);
}
else
{
    console.log(false);
}


//Question 5: Write a function that takes an array of objects representing purchases
// and returns the total amount spent on those purchases.

let itemsPurchase = [
    {
        name : 'shoes',
        quantity : 1,
        price : 60,
    },
    {
        name : 'bags',
        quantity : 3,
        price : 80,
    },
    {
        name : 'makeup',
        quantity : 4,
        price : 90,
    },
    ];
    let totalPrice = 0;
    for (let purchase of itemsPurchase){
        totalPrice += purchase.quantity * purchase.price;
    }
    console.log(`total cost of all items are: ${totalPrice}`);


//Question 6: Write a function that takes an array of numbers as 
//input and returns the sum of all the numbers in the array.

let numberArray = [4,5,6,7,8,9];
let sum = 0;
function totalSum(numberArray){
    numberArray.map((number) =>{
        sum += number;
    }};
{ 
    return sum;
});
let result = totalSum(numberArray);
console.log(${result});


//Question 7: Write a function that takes an array of strings as 
//input and returns a new array with all the strings converted to uppercase.

let fruits = ['apple', 'banana', 'cherry', 'mango'];

let convertedToUppercase = fruits.map((convert) =>convert.toUpperCase());
console.log(`Result of fruits array in uppercase: ${convertedToUppercase}`);


//Question 8:Write a function that takes an array of numbers as input and 
//returns a new array with all the even numbers from the original array.
let numberArray = [1,2,3,4,5,6,];

let findEven = numberArray.map((even) =>{
    if(even%2===0)
    {
        return even;
    }

else
{
    return 'undefined';
}
}); 
console.log(findEven);

//Question 9: Write a function that takes an array of strings as input
 //and returns a new array with all the strings that have a length of 4 or less.

 let country = ['China', 'India', 'Turkey', 'Cuba'];

 let findLength = country.map((cLength) =>{
    if(cLength.length<=4)
    {
        return cLength;
    }
    else 
    {
        return 'undefined';
    }

 }
 )
 console.log(findLength);
