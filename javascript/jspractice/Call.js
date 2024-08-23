var userdetails={
    name:"raj",
    id:1,
}
let printdetails=function(id)
     {
     console.log(this.name+id);
     
    }
var userdetails2={
    name:"john",
    id:1,
}
printdetails.call(["delhi","india"])

 