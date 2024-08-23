//object 

var car={
    color:["black","red","green"],
    Automatic:true,
    brand:"Lamborgini",
    model:"urus",
    price:"5cr",
    type:"petrol",
    availability:true,
   "capa city":1
}



console.log(car.Automatic);
console.log(car["capa city"]);
console.log(car);
car.type="disel"
console.log(car);
delete car.type
car.color[3]="blue"
console.log(car);

//object assignment
var marker={
    ink:"black",
    brand:"camlin",
    price:"25"

}
// console.log(marker);
// console.log(marker.price);
// console.log(marker.ink="blue");
// marker.shape="cyllinder"
// console.log(marker);
// delete marker.brand;
// console.log(marker);

var employee={
    ename:"ditha",
    eid:"TY1234",
    "d-o-b":"6-7-99",
    designation:"ASE",
    salary:50000,
    yoj:"2022",
    address:{
        street:"kpbh",
        pincode:"765674",
        area:"kukatpally",
        office:{
            x:10,
            y:20
        }
    }
    

}
console.log(employee.address.office.x);

//object in array
var data=[{
    name:"hita",
    age:23
},
{
name:"y",
age:24
}
]
console.log(data[0].name);
//keys and values
console.log(Object.keys(car));//It will retrive keys
console.log(Object.values(car));//It will retrive values













