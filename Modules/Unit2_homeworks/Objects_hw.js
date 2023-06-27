//Question1:Build Object for Employees: An employee can be represented as an object with attributes such 
//as name, age, salary, and job title. It can also have functions like work, take a break, and attend a meeting.

let employees = {                //object requires {} Property name : value
name : 'Sam',
age : 30,
salary : 150000,
jobTitle : 'Nurse',
working : function() 
{
    console.log('starting work at 9am until 5pm'); 
},
break : function() 
{
    console.log('breaking at 12:30pm');
},
meeting : function() 
{
    console.log('meeting is scheduled for 2pm');
},

}
console.log(employees);
//Three functions that were created for this problem:
employees.working();
employees.break();
employees.meeting();


//Question2: Build Object for  Bank accounts: A bank account can be represented as an object with 
//attributes such as account number, balance, and account type. It can also have functions like deposit, withdraw, and transfer.

let bankAccounts = 
{
    accountNumer: 202040,
    balance: 30000
    accountType: 'saving',
    deposit: function() {
        console.log(`account total deposit will be 1000`);
    },
    withdraw: function() {
        console.log(`the withdraw amount is 5000`);
    },
    tranfer: function() {
        console.log(`account transfer will be made on`);
    },
}
console.log(bankAccounts);
accounts.deposit();
accounts.withdraw();
accounts.transfer();


//Question3: Build Object for  Dogs: A dog can be represented as an object with attributes 
//such as breed, age, and color. It can also have functions like bark, wag tail, and fetch.
let dogs =
{
    bread: 'American Eskimo',
    age: 8,
    color: 'white',
    bark: function() 
    {
        console.log(`the barks after hearing the neighbor`);
    },

    wagTail : function() 
    {
         console.log(`the dog is wagging tail to express happniess`);
    },
    fetch : function() 
    {
        console.log(`the dog fetched the ball`);
    },

}
console.log(dogs);
dogs.bark();
dogs.wagTail();
dogs.fetch();

//QuestionFour:Suppose you are building an e-commerce application and you want to 
//create a new Product object with property name, price, manufacturer, category

let product = {
    name :'AirForce',
    price : 200,
    manufacturer :'Vietnam',
    catagory : 'Shoes',
}
console.log(product);
//QuestionFive: Now add a description property to the Product object you created
product.description = 'AirForce will be lunched in September 2023.';
console.log(product);


//QuestionSix:Suppose the price of the Product object you
//created earlier changes. Now the price increased by $10
product.price = 210;
console.log(product);      //updated price


//QuestionSeven:Remove the description property from the Product object you created earlier.
delete product.description
console.log(product);      //this will give the removed value

//QuestionEight:Suppose you are building a blog application and you want to display a list of all the blog posts.
//You have an array of blog post objects, where each object has properties such as title, author, date, and content. 
//Find out if date field is empty on any object

let blog = [
{
    title : 'Pinch of Yum',
    author : 'Kat Jenn',
    date : 2010,
    content : 'food',
},
{
    title : 'To free my thoughts',
    author : 'Johnson Sam',
    date : 2013,
    content : 'health',
},]

const emptyDateObj = [];
for (let blogkey of blog)
{
    if(blogObject.date === "")
    {
       emptyDateObj.push(blogObject);
    }
}
console.log(emptyDateObj);