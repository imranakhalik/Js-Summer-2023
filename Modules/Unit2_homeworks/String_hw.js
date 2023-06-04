let coder = 'I am a good programmer'
console.log(`print the line as string ${coder}`); 

//Find the type of the varibale coder
let type_of_variable = typeof (coder)
console.log(`\nprint what type of variable is this ${type_of_variable}`); //string

//Find out the lenght of the variable coder
let string_length = coder.length
console.log(`print the length of the string ${string_length}`) //length is 22

//Convert to all uppercare
let coder_UpperCase = coder.toUpperCase()
console.log(`print the whole string in uppercase: ${coder_UpperCase}`); // I AM A GOOD PROGRAMMER

//Convert to all lowercase
let coder_LowerCase = coder.toLowerCase()
console.log(`print the whole string in lowercase: ${coder_LowerCase}`);

//Find out if it includes the word 'good'
        //function: includes()
        //input: patter
        //return: boolean   
let coder_include = coder.includes('good')
console.log(`check if the coder sentence has this word: ${coder_include}`);

//Strip out the word 'programmer' from variable 
        //function: replace()
        //input: patternToReplace, patternToReplaceWith
        //return: string
let coder_replace = coder.replace('programmer', 'dancer')
console.log(`change the word programmer into dancer: ${coder_replace}`);

//Find out if varibles ends with word 'programmer'
        //function: endsWith()
        // input: patter (String)
       // return: boolean
let coder_endswith = coder.endsWith('programmer')
console.log(`check to see if the string ends with the word: ${coder_endswith}`);    //it will print as true 

//Split the variable into two variables at 'good' word
        //Split function will divide into portions at the given word or char 
let coder_split = coder.split('good')
console.log(`print the string after the split: ${coder_split}`);

//Own pratice:
    //split the variable into the two variables at 'g' char
let coder_split_g = coder.split('g')
console.log(`after spliting the char g: ${coder_split_g}`);
