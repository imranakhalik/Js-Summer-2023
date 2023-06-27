/*Question 1: Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumArray(numbers){
    let sum = 0;
    for (let i = 0; i< numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
    //creating an array of numbers 
let numbers = [2,3,4,5,6];
let result = sumArray(numbers);
console.log(result);

//Question 2: Write a function that takes in a string and returns the string reversed.
function reversedString(givenString) {
    let reversed = "";
    for (let i = givenString.length -1; i >=0; i--)
    {
        reversed += givenString[i];
    }
    return reversed;
}
let givenString = "Shall we see";
let result = reversedString(givenString);
console.log(`the reverse string is: ${result}`);

//Question 3: Write a function that takes in an array of objects representing people, where each object has
//properties for name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.

 //create the objects
 let peopleInfo =[{
    name:'Hena',
    age: 10,
    gender: 'F',
 },
 {
    name: 'Noah',
    age: 16,
    gender: 'M',
 },
 {
    name: 'Sarah',
    age: 40,
    gender: 'F',
 
 }];

 //Create the function:
 function getInfo(peopleInfo){
    let result =[]
    for (let i in peopleInfo)
    {
        if(peopleInfo[i].age>18)
        {
            result.push(peopleInfo[i]);
        }
    }
    return result;
}
let result = getInfo(peopleInfo)
console.log(result);

//Question 4: Write a function that takes in an array of numbers 
//and returns a new array containing only the even numbers from the original array.

let numberArray = [10,11,12,13,14,15,16,17,18];
function findEvenNum(numberArray){
    let newArray = [];
    for (let i of numberArray)
    {
        if(i%2===0)
    {
        newArray.push(i);
    }
}
    return newArray;
}
let result = findEvenNum(numberArray);
console.log(result);

//Question 5: Write a function that takes in an array of strings 
//and returns a new array containing only the strings that start with the letter "A".

let country = ['Algeria', 'China', 'India', 'Albania'];  //creating an array 
function startWithA(country){                               //creating function
    let newArray = [];                                      //creating an new empty array to store the 
    for(let i of country)                                   //
    {
        if(i.startsWith('A'))
        {
            newArray.push(i);
        }
    }
    return newArray;
}
let result = startWithA(country)
console.log(result);


//Question 6: Write a function that takes in an array of objects representing books, 
//where each object has properties for title, author, and published, and returns an array 
//of strings representing the titles of all the books published in the year 2000 or later.

let books = [
{
     title: 'The Road',
     author: 'Cormac McCarthy',
     published: 2006,
},
{
    title: 'The Brief Wondrious Life of Oscar Wao',
    author: 'Junot Diaz',
    published: 2007,
},
{
    title: 'Uncle Toms Cabin',
    author: 'Harriet Beecher Stowe',
    published: 1852,
},
];
function findTitle(books)
{
    let result = [];
    if(i. published>= 2000)
    {
        result.push(i.title);
    }
    return result;
}
let result = findTitle(books);
console.log(result);

//Question 7: Write a function that takes in two numbers and returns the larger of the two.

let numOne = 10;
let numTwo = 45;
function largestNum(numOne, numTwo){
    if(numOne> numTwo)
    {
        return numOne;
    }
    else if(numTwo>numOne)
    {
        return numTwo
    }
}
let result = largestNum(numOne, numTwo);
console.log(`the largest number is ${result}`);


//Question 8: Write a function that takes in an array of numbers and returns the smallest number in the array.

let numberOne = 55;
let numberTwo = 89;
function smallestNum(numberOne, numberTwo){
    if(numberOne<numberTwo)
    {
        return numberOne;
    }
    else if(numberTwo<numberOne)
    {
        return numberTwo;
    }
}
let result = smallestNum(numberOne, numberTwo);
console.log(`the smallest number is ${result}`);

                    //Need to go over the last two questions
//Question 9: Write a function that takes in an array of strings and returns the longest string in the array.
let givenString = ['Alabama', 'Alaska', 'California', 'Colorado', 'Connecticut', 'Delaware'];
let longestString = [];

function findLongestString(givenString){
    for(let i of givenString)
    {
        longest=i;
    }
    return longest;
}

let result = findLongestString(givenString);
console.log(`longest string is ${result}`);

//Question 10: Write a function that takes in an array of objects representing students, 
//where each object has properties for name and grade, and returns an array of objects representing only the students who have a grade of "A".

const students = [
    {
      name: 'Zena',
      grade: 'B',
    },
    {
      name: "Sao Je",
      grade: 'A',
    },
    {
      name: "Step Curry",
      grade: 'C',
    },
  ];

  function findGrade(students)
  {
    let result=[];
    for(let i of students)
    {
        if(i.grade=== 'A')
        {
            result.push(i);
        }
    }
    return result;
  }

  let result = findGrade(students);
  console.log(result);