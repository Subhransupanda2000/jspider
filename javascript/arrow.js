//Write an arrow function that takes two numbers and returns their sum.
var v = (a, b) => console.log(a+b);
v(1, 2); 
//Write an arrow function that takes a string and returns its length using implicit return.
var v = (a) => console.log(a.length);
v("hello"); 
//Write an arrow function that returns an object with name and age properties.
var v=(a)=>console.log(a);
v({name:"john",age:"24"})
//Write an arrow function to filter an array of numbers and return only even numbers.
var v=(arr)=>console.log(arr.filter((num)=>num%2==0));
v([1,2,3,4,5,6,,7,8,9])
//Write an arrow function that takes two numbers and returns their product. If the second number is not provided, it should multiply by 1.
var v=(a,b=1)=>console.log(a*b);
v(5,6); // Outputs: 5
//Write an arrow function that returns a random number between 0 and 1.
var v = () => Math.random();
//Write an arrow function that squares each number in an array using the map method.
var v=(arr)=>console.log(arr.map(num=>num*2));
v([1,2,3,4,5])
//Write an arrow function to sort 
var v=(arr)=>console.log(arr.sort((a,b)=>a-b));
v([4,3,9,2,7,1,6,8,5])
//wap using return
var v=(a,b)=>{return a+b}
var res=v(1,2)
console.log(res);
//wap using bactic
var v=(a)=>{return `${a}`}
var res=v("hello")
console.log(res);
//Write an arrow function to sort an array of strings by their length.
var v=(arr)=>{ return arr.sort((a,b)=>a.length-b.length)}
var res= v(["defg","a","abc"])
console.log(res);
//create a programme in following steps
// create method which accepts 2 arguments and return its sum
//create a method which accepts 2 arguments and return its product
//if sum and product are equal print true else print false
var sum = (a, b) => {
    var num1=console.log(a+b);
    var num2=console.log(a*b);
    if(num1==num2) console.log("both are same");
};
sum(1,2)
//spine number
 var v=123;
 var sum=0;
 var product = 1;
 while(v!=0)
 {
    var ln=v%10;
    sum=sum+ln;
    product=product*ln
    v=Math.floor(v/10);
 }
 if(sum==product){
    console.log("spy number");
    
 }
 else{
    console.log("not a spy number");
    
 }
//-----------------------------------
//-----------------------------------
var b=()=>{return "hello"}
var res=b()
console.log(res);
//--------------------------------
// (var b=()=>console.log("hello"))
// ()
//--------------------------------
var b=(a,b) =>{return a+b}
var a=b(1,2)
console.log(a);
//--------------------------------
(function a()
{
    console.log("hello");
    
})()
//--------------------------------
var ex=(a,b)=>{return a+b}
var ex1=ex()
console.log(ex1);
//-------------------------------------
// 1.
//2.self invoking function / immediate invoking function
//3.Arroe Function




// var x=function(){
// }

//2.self invoking function / immediate invoking function

console.log((function x9(a,b) {
    // var sum=a+b;
    // console.log(sum);
    return a+b
})(2,3));

(function x9(a,b) {
    var sum=a+b;
    console.log(sum);
})(2,3);



// **************

var y=(function y() {
    console.log("y called");
})();

//3.Arrow function or lamda function
var varName=()=>"Hello World";
console.log(varName());

var add=(a,b)=>a+b;
console.log(add(2,3));

var demo=(x)=>x/100;
console.log(demo(2));

var d=(a,b)=>{
    var add=a*b;
    return add;
}
console.log(d(3,2));

var d1=()=>(function x1(){
    console.log("d1 called");
})();
d1();

//implict arrow function
var num=(a)=>a*a;
console.log(num(2));

//explict arrow function
var double = n => {
    console.log(`${n}`);
    return n * 2;
};
console.log(double(5));


//even or odd
var num=(a)=> (a%2==0);
console.log(num(30));

//or
var num1=(a)=> {
    if(a%2==0){
        return "even"
    }
    else{
        return "odd" 
    }
}
console.log(num1(9));

//
function add(a,b){
    var sum=a+b;
    return sum
}
console.log(add(3,4));

function add(a,b){
    return a+b
}
console.log(add(3,4));

//

var divison =(x)=> (x/100);
console.log(divison(2));


var divison=(x)=> {
    var d1= x/100;
    console.log(d1);
}
console.log(divison(1));

//

(function(a , b){
    console.log(a + b);
})(5,2);
//
(function(a,b){
    console.log(a*b);
})(2,9);

// 

(function(){
    var str = "hello world";
    console.log(str.length);
})

// 

(function(){
    var str = "hello world";
    console.log(str.toUpperCase())
})
//
(function() {
    console.log(new Date());
})();







