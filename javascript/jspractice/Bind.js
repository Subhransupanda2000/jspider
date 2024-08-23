var userdetails={
    name:"raj",
    id:1,
}
let printdetails=function(state,country)
     {
     console.log(this.name+" "+this.id+" "+state+" "+country);
     
    }
var userdetails2={
    name:"john",
    id:1,
}
var copfun=printdetails.bind(userdetails,"delhi","india")
copfun();
