// var a=5;
// var b=4;
// var c=3;
// var res=b<a&&c<a?"a is greater":a<b&&c<b?"b is greater":a<c&&b<c?"c is greater":"no match"
// console.log(res);
// if (b<a&&c<a) {
//     console.log("a is greater bro");
    
// } else if(a<b&&c<b){
//     console.log("b is greater bro");

// }else if(a<c&&b<c)
// {
//     console.log("c is greater bro");

// }else{
//     console.log("not found");
    
// }
var res=prompt("enter marks 1 to 100")
if(res<=100&&res>=80)
{
    console.log(" grade A");
    
}
else if(res<=79&&res>=60)
{
    console.log("grade B");
    
}
else if(res<=59&&res>=39)
{
    console.log("grade C");
    
}
else if(res<35&&res>=0)
{
    console.log("fail");
    
}
else
{
    console.log("put valid number");
    
}