/*let fruits=["Banana","Apple","Mango","Orange"]
console.log(fruits.toString());
console.log(fruits.join("*"));

//pop will remove the last element of the array
console.log(fruits.pop());
console.log(fruits);

//push adds a new element at the end of the array
let fruits=["Banana","Apple","Mango","Orange"]
console.log(fruits.push("Pineapple"));
console.log(fruits); 

//shift removes the first element and returns it
let fruits=["Banana","Apple","Mango","Orange"]
console.log(fruits.shift());
console.log(fruits); 

//unshift adds a new element in the beginning
let fruits=["Banana","Apple","Mango","Orange"]
console.log(fruits.unshift("Lemon"));
console.log(fruits); 

//Deleting elements from Array
let fruits=["Banana","Apple","Mango","Orange"]
delete fruits[1];
console.log(fruits);

//merge arrays using concatenation
let arr1=[10,20];
let arr2=['a','b','d']
let arr3=['x','y','z']
let merge=arr1.concat(arr2,arr3);
console.log(merge) */

//slice will get some elements of the array
let fruits=["Banana","Apple","Mango","Orange","Lemon"]
//console.log(fruits.slice(2));
//console.log(fruits);

console.log(fruits.sort()); //sorted in alphabetical order ,used for both string and numbers
//let nums=[100,600,200,300,800]
//console.log(nums.sort());

//reverse will change the original array
fruits=["Banana","Apple","Mango","Orange","Lemon"]
console.log("Original Array" +fruits);
fruits.reverse();
console.log("After reversing" +fruits);