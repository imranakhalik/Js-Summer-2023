//Question 1: Create a class called Animal that has a name property and a speak method. The speak method should log a message to the console 
//saying "Hello, my name is {name}." Create an instance of the Animal class and call the speak method.

class animal {
    info ={
        name : 'Lilly',
    }
speak()
{
    console.log(`Hello, my name is ${this.info.name}.`);

}
}
let showInfo = new animal()
showInfo.speak();

//Question 2: Create a class called Person that has name and age properties, and a greet method that 
//logs a message to the console saying "Hello, my name is {name} and I am {age} years old." 
//Create an instance of the Person class and call the greet method.

class person{
    info ={
        name : 'Jeff',
        age : 10,
    }
    greet()
    {
        console.log(`Hello, my name is ${this.info.name} and I am ${this.info.age} years old`);

    }
}

    let personInfo = new person();
    personInfo.greet();

//Question 3: Create a class called Car that has make, model, and year properties, and a start method that logs a message to the 
//console saying "The {make} {model} is starting." Create an instance of the Car class and call the start method.

class car {
   
    info ={
        make :'Lexus',
        model : 'rx350',
        year : 2017,
    }

    Start()
    {
        console.log(`The ${this.info.make} and ${this.info.model} is starting`);
    }

}
let carInfo = new car();
carInfo.Start();


//Question 4: Create a class called Rectangle that has width and height properties, 
//and a getArea method that returns the area of the rectangle.
//Create an instance of the Rectangle class and call the getArea method.

class rectangle {
    info ={
        width : 22,
        height : 30,
    }
    getArea()
    {
       let area = (this.info.width*this.info.height)
        console.log(`the area of this rectangle is ${area}`);
    }

}
let result = new rectangle ();
result.getArea();

module.export = 

//Question 5:Create a class called Square that extends the Rectangle class and has a sideLength property. 
//Override the getArea method in the Square class to return the area of the square. 
//Create an instance of the Square class and call the getArea method.

class square extends rectangle{
    info2 ={
        sideLength : 4, 
        height : 4,
        width : 4,

    }
    getArea(){
        let area = (this.info2.height*measurement2.width*this.measurement2.sideLength)
        console.log(`thea are of the square is ${area});
    }

}
let newResult = new Square()
newResult.getArea();


//Question 6:Create a class called BankAccount that has accountNumber, accountHolderName, 
//and balance properties, and a deposit method that takes in an amount and adds it to the balance. 
//Create an instance of the BankAccount class and call the deposit method with an amount.

class BankAccount
{
    bankInfo = {
        accountNumber = 440404,
        accountHolderName = 'Imrana Khalik',
        accountBalance = 50,
    }
    deposit(addBalance)
    {
        this.bankInfo.accountBalance+=addBalance;
    }
}

let result = new BankAccount();
result.deposit(100);
console.log(result.bankInfo);

//Question 7: Create a class called Person that has name and email properties, 
//and a sendEmail method that takes in a message and sends an email to the person's email address. 
//Create an instance of the Person class and call the sendEmail method with a message.

class person {
    personInfo = {
        name : 'Jeff Copper',
        email : 'jeff_cop@gmail.com',
    }
    sendEmail(message)
    {
        console.log(`the message is ${message} )
    }
    let result = new person()
    result.sendEmail('Hope you are doing well')

}


//Question 8: Create a class called Product that has name, price, and description properties, 
//and a discount method that takes in a percentage and returns the discounted price.
//Create an instance of the Product class and call the discount method with a percentage.

class product 
{
    productInfo = 
    {
        name : 'mango',
        price : 3,
        description : "a mango is an edible stone fruit produced by the tropical tree Mangifera indica",
    }
    discounted(lowerPrice)
    {
        this.productInfo.price-=lowerPrice;
    }
}

const discountAmount = new product ();
discountAmount.discounted(1);
console.log(discountAmount.productInfo);



