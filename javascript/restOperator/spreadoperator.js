// var arr=["abc","def","ghi"]

// function result(a,b,c)
// {
//     console.log(a,b,c);
// }
// result(arr[0],arr[1],arr[2])
// console.log(...arr);
// console.log(arr);
var students={
    name:"raj",
    id:1,
    age:"24"
}
// const {age,...rest}=students
// console.log(rest);
var newstudents={
    age:25,
    ...students
}
console.log(newstudents);