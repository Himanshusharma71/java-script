// const myArr=[0,1,2,3,4,5,5,6,7,7];
const myHeros=["saktiman","krish","hanuman","ironman","thor"];

// console.log(myHeros);// by this we print the arr
// console.log(myArr[6]);// this show the element present in the array at index value 6

myHeros.push("Arjun");//by puch method we added the element in last of the array 

myHeros.pop();//this used to remover the last element of the array 
myHeros.unshift("Himanshu");//add the value at the begining of the array
myHeros.shift();//this remove the elemets form the begining from the array 
// console.log(myHeros.includes("Himanshu"));//here we ask is himanshu is the array element 

// console.log(myHeros.indexOf("krish"));//this show the index of the krish
const newArr=myHeros.join()//this bind the array and conver into string 
// console.log(newArr);

//slice abd splice 

console.log("a", myHeros);

const neon1=myHeros.slice(1,3);//here the elements start print form index 1 to index 2 this is not include the index 3 
const neon2=myHeros.splice(1,3);//why using this splice the part of splice which we given is removed after this the original array will only show the remaining part of the array 

console.log(neon1);
console.log(neon2);
console.log(myHeros);
