//Question One:
//Create an array of products with at least 5 products, Each products should have the following properties:
//Name, Price, Quantity
let product = [
    {
    name: "Product A",
    price: 10,
    quantity: 5,
},
{
    name: "Product B",
    price: 20,
    quantity: 3,
},
{
    name: "Product C",
    price: 15,
    quantity: 7,
},
{
    name: "Product D",
    price: 25,
    quantity: 2,
},
{
    name: "Product E",
    price: 30,
    quantity: 4,
}
];
//For this example we can use for-in loop or for loop.
//Syntax for for-in loop:       //for in loop is used for objects
//for (let key in object) {
    //code to be execuated
//}
for(let i in product){
    console.log(product[i])
}

//Question two: 
//Loop through the array using a for loop and print out the name and price of each product

//Product A: $10
//Product B: $20
//Product C: $15
//Product D: $25
//Product E: $30

for(let y = 0; y <= product.length -1; y++){
    console.log(`productname:${product[y].name}price: ${product[y].price}`);
}

//Question three:
//Use a while loop to find the product with the lowest price. Print out the name and price of the product.

let lowestPrice = product[0].price;  // this is going to give us the index w the price
 
let  x= 0;              //here we have to intinalize the x
while(x <=product.lenght -1){               //this will determine the last index and once last index is found it will break the loop
    if(product[x].price<lowestPrice)        //first we store the price after the iteraton we compare it w the new price to compare the low price
    {
        lowestPrice = product[x].price;     //we have to store the x value after excuation

    } 
    x++;
};
console.log(`\n ${lowestPrice}`);  //print the final value as the lowest value 

//Question four:
// Use a for of loop to calculate the total value of all products in the array.
let sum = 0;
for( let z of product){                                     //for-of loop is used in array or string
    sum+= z.price * z.quantity;
}
 console.log(`\ntotal value: ${sum}`);

//Question Five:
//Use a for in loop to print out all the properties of each product in the array.

for( let a of product){     //using the for-of loop it will count the array
    for(let key in a){      //within the for-of loop, we are using for-in loop to find the properties of the object
     console.log(`${key}: ${a[key]}`) //a and key will print all the values of the properties from the array
    
   }
   }

   //Question Six:FizzBuzz
   //Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", 
   //multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
   
for(b =1; b<= 100; b++){                //print the num from 1 to 100
    if(b%3===0){                        // multiplies of 3 
    console.log('Fizz');                //it will print will fizz
    }
    else if(b%5===0){                   //mutiplies of 5
        console.log('Buzz');            //it will print buzz
        }
     else if(b%3===0 && b%5===0){       // multiples of both 3 and 5 
        console.log('FizzBuzz');        //it will print FizzBuzz
     }
     else{
        console.log(b);                 //this condition will print the remaining number w/o mutiplues of 3 and 5
     }
}
   