//Create an array of 5 students names
let namesOfStudent = ['Sam', 'Sarah', 'Hana', 'Zen', 'Charlie']
 console.log(`${namesOfStudent}`);

//Find the length of an array
let lengthOfArray = namesOfStudent.length; 
console.log(`lengthOfArray : ${lengthOfArray}`); //after back ` tick you write the message that you are trying to print 
           //and using the dollar sign and curly brac ${} you write the variable you need to print

        
//Using Push and Unshift function
        //using push function, print the variable. Push function only gives you a number.
let studentPushValue = namesOfStudent.push('Shaala')
//print the push value
console.log(`push value ${studentPushValue}`)

//next step after using push function is to print the original array with the new additional value index we created in this case "Shaala"
console.log(namesOfStudent);
//Now we should be able to see 'Shaala' added after 'Cherlie'


//using unshift function, print the variable
let studentUnshiftValue = namesOfStudent.unshift('Ray')
console.log(`unshift value ${studentUnshiftValue}`);
//Now print the array with the new variable 'Ray'
console.log(`${namesOfStudent}`);


                //Using Pop and Shift Functions
//using pop function, print the variable. Pop function lets you remove the end index. And it will print in terminal as a string
let popFunctionForArray = namesOfStudent.pop()
console.log(`Will print the pop value as: ${popFunctionForArray}`);
//Now print the new array 
console.log(`${namesOfStudent}`);

//using shift function, print theh variable. Shift function lets you remove the front index. And it will print as a string in the termial
let shiftFunctionForArray = namesOfStudent.shift()
console.log(`Will print the shift value as:${shiftFunctionForArray}`);
//Now print the new array
console.log(`${namesOfStudent}`);


                    //Using Splice Function
//using splice function it allows you to add or remove any value anywhere in the array
//3 steps for splice: 
        //input-1: find which index you have to add/remove value
        //input-2: then, how many values to remove before adding any new-values
        //input-3:  new-values to add in the array
        //return: an array with removed values
// let nameOfStudent: [ 'Sam', 'Sarah', 'Hana', 'Zen', 'Charlie']
let spliceFunctionForArray = namesOfStudent.splice(3,2,'Asif', 'Dona'); //index 3 is Zen, 3 removal value starts from Zen and Charlie, 
                                                                                //'Asif and Dona' are the new mention value
console.log(`Will print the splice value as: ${spliceFunctionForArray}`);
//print the new value as the final array
console.log(`${namesOfStudent}`);

//Find out if array include the value 'John'
let array_include = namesOfStudent.includes('John')
console.log(`find out if array includes: ${array_include}`); //return value is false

//Find index of student 'Kate"
let index_of = namesOfStudent.indexOf('Kate')
console.log(`find out the index of: ${index_of}`); //-1 b/c it's not found 

//Reverse your array and print last Index value
let reverse_array = namesOfStudent.reverse()
console.log (`reverse the array as: ${reverse_array}`)

//now print the last index value 
let last_index = reverse_array.lastIndexOf()
console.log(`find the last index of: ${last_index}`); //-1



//Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )
let equalto = index_of === last_index
console.log(`doesFirstIdexEqualToLastIndex: ${equalto}`); //-1 which is true b/c they match

