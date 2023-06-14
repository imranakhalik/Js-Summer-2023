//Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
let number = 10;
//condition: % ===0
if (number%2===0) {
    console.log(`number is even ${number}`);

}
else{
    console.log(`number is odd ${number}`);

}

//Write a program based on age and displays a message based on their age using an if-else if statement:
//If the age is less than 18, display "You are a minor".
//If the age is between 18 and 65 (inclusive), display "You are an adult".
//If the age is greater than 65, display "You are a senior citizen".
let age = 24;
if (age <= 18) {
    console.log(`You are a minor${age}`);
}
else if(age >= 18 && age <= 65){
    console.log(`You are an adult${age}`);
}
else if(age >=66){
    console.log(`You are a senior citizen${age}`);
}
else{
    console.log(`any invalid number submitted it will not work${age}`);
}


//Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
//If letter is 'a', it is a vowel
//If letter is 'i', it is a vowel
//If letter is 'o', it is a vowel
//If letter is 'u', it is a vowel
let letter = 'a';
if (letter ==='a'){
    console.log(`${letter} it is a vowel`);
}
else if(letter ==='e'){
    console.log(`${letter} it is a vowel`);
}
else if(letter ==='i'){
    console.lof(`${letter} it is a vowel`);
}
else if(letter ==='o'){
    console.log(`${letter} it is a vowel`);
}
else if(letter ==='u'){
    console.log(`${letter} it is a vowel`);
}
else{
    console.log(`${letter} any other letters than it's consonant`)
}

//Write a program based on three numbers and displays the largest number using an if-else statement.
//

let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

if (numberOne >=numberTwo && numberOne <=numberThree){
    console.log(`Number three is the largest`);
}
else if(numberTwo <=numberOne && numberTwo <=numberThree){
    console.log(`Number three is the largest`);
}
else if(numberThree >=numberOne && numberThree >=numberTwo){
    console.log(`Number three is the largest`);
}
else{
    console.log(`Any num less than numberThree is a smaller number`)
}

//Write a program based on given password and displays a message based on the password using an if-else statement:
let password = 'Test1233';

//If the password is less than 8 characters, display "Password too short".
//If the password contains both letters and numbers, display "Password accepted".
//If the password does not meet either of the above conditions, display "Password rejected".

//if ()
