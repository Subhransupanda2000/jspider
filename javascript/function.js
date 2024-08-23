//function declaration statement
// function fun(a,b)
// {
//     console.log(`${a+b}`);
//     console.log(`${a-b}`);
//     console.log(`${a*b}`);
//     console.log(`${a/b}`);
//     console.log(`${a%b}`);
//     console.log(`${a**b}`);
// }
// var a=Number(prompt("type a"))
// var b=Number(prompt("type a"))
// fun()
// fun(1)
// fun(1,2,3,4,5,9)
// fun(2*5,4)
//----------------------------------
// function expression
// var fun=function fun1(a,b)
// {
//     console.log(a+b);
// }
// var b=fun
// b(1,2)
//------------------------------------
// log function call
// store a variable
// function fun1()
// {
//     return "hello"

// }
// var b=fun1()

// b()
//-------------------------------------
//Q. wap squre of number using function
// var a=2
// var b=4

// function fun(a)
// {
//     return a*a
// }
// var d=fun(a)
// console.log(d);
// var c=fun(b)
// console.log(c);
//-------------------------------------------
// console.log("start");
// FDS()
// function FDS()
// {
// return "hello"    
// }
// var fe=function fe()
// {
//     console.log("FE called");
    
// }
// var a=10;

// console.log("stop");
//-------------------------------------------
// function checkAge(data) {
//   if (data == { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }
// checkAge({ age: 18 });
//-------------------------------------------------
// var x=2
// var square=function(num){
//     var res=num*num
//     return res
// }
// var square2=square(x)
// var square4=square(4)
//----------------------------------------

// function getAge(...a) {
//     console.log(typeof a);
//   }
  
//   getAge(21);
//---------------------------------------------
function outer() {
  function inner() {
    function innerMost() {
      function MostinnerMost() {
        return "hello";
      }
      return MostinnerMost;
    }
    return innerMost;
  }
  return inner();
}

var res = outer()()();
console.log(res); // This will print "hello"


//----------------------------------------


