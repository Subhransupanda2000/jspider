var result=prompt("enter day here")
var res=result.toLowerCase();
switch(res){
    case "monday":
    console.log("day-1");break;
    case "tuesday":
    console.log("day-2");break;
    case "wednesday":
    console.log("day-3");break;
    case "thursday":
    console.log("day-4");break;
    case "friday":
    console.log("day-5");break;
    case "saturday":
    console.log("day-6");break;
    case "sunday":
    console.log("day-7");break;
    default:
    console.log("enter valid day");
}