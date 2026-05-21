let person=
{
    firstname:"John",
    lastname:"Doe",
    age:50,
    weight:100
}

//Access object properties
//name of the property
console.log(person["firstname"]); //specify the objectname,propertyname
console.log(person.age); //objectname.propertyname 

//add a new property to the existing object
person["height"]=190;
console.log(person["height"]);

//update existing property
person["weight"]=60;
console.log(person.weight);

//remove the property from the object
delete person["age"];
console.log(person.age);