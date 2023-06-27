/*Question One: Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays

                Step One: writing a function
function joinArray(arrayOne, arrayTwo) {
    return [...arrayOne, ...arrayTwo];
}
                Step Two: creating the two arrays of number

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];

                Step Three: printing the new array
const newArray = joinArray(arrayOne, arrayTwo)
console.log(newArray);

let combinedArray = [...arrayOne, ...arrayTwo];      //... operator is used to combain arrays
console.log(combinedArray);


Question Two: Write a function that takes in an array of strings and 
a string to add to the beginning of the array, and returns a new array with the string added to the beginning.

                Step one: writing a function:
function addStringToBeginning(orginalArray, string){
    return[string, ...originalArray];
}
                Step two: declear an array of string
const originalArray = ['pillow', 'bedsheet', 'blanket'];
const string = 'sidePillow'                                  //new value we are adding
                
                Step three: print the new array of string;
let newArray = addStringToBeginning(originalArray, string);
console.log(newArray);

Question Three: Write a function that takes in an object and a key-value pair 
to add to the object, and returns a new object with the key-value pair added.

                Step one: declear a function
function addKeyValue(originalObject,key,value) 
{
        return {...originalObject,[key]:value};      // [key: inserting a property] : value(adding a value)
}

                Step two: create an object
const originalObject = {name: 'Sam', Age: 18};

                Step three: input and print the new property  w the original object
const newObject = addKeyValue(originalObject, 'adress', '23 Wayne Ave');
console.log(newObject);


Question Four: Write a function that takes in an array of numbers and returns the largest number in the array.

                Step one: write a function
function largestNumInArray(array) 
{
   let largestNum = array[0];
    or(let i of array) 
    {
        if(array[i]> largestNum)
        {
            largestNum = array[i];
        }
    }
    return largestNum;
}

            Step two: create an array of number
const numArray = [0,1,2,3,4,5,6,7,8,9];

            Step three: print the largest number
let result = largestNumInArray(numArray);
console.log(result);

QuestionFive: Write a function that takes in an array of strings 
and returns a new array containing all the strings in alphabetical order.

