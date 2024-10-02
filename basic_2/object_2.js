//the code is here how to create a object singalton or with constructor 

// const tinderUser=new Object() //this is singleton object 
// console.log(tinderUser);

const tinderUser={
}

tinderUser.id="123user"
tinderUser.name="himanshu"
tinderUser.isLoggedIn=false

const regularUser={
    email:"sum@gmail.com",
    fulName:{
        userFullName:{
            firstName:"himanshu",
            lastName:"sharma",
        }
    }
}
// console.log(regularUser.fulName);//by this we access the inner object 
// console.log(regularUser.fulName.userFullName.firstName);//by this we access the inner object in nested depth

// console.log(tinderUser);


const obj1={
    1:"a",
    2:"b",
    3:"c",
}
const obj2={
    4:"ac",
    5:"bc",
    6:"cd",
}

// const obj3={obj1 ,obj2} ///by this the value come obje ke andar bhi obj hi aayga {{obj1}{obj2}}

// const obj3=Object.assign({},obj1, obj2); //here we marge the two objects 
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'ac', '5': 'bc', '6': 'cd' }

const obj3={...obj1,...obj2}// this is best and mostly used for mearge the object
// console.log(obj3)


console.log(Object.keys(tinderUser));//by this we can take all the keys of the objects 
console.log(Object.values(tinderUser));//by this we can take all the values of the objects 
console.log(Object.entries(tinderUser));//by this we can take all the data of the objects 
console.log(tinderUser.hasOwnProperty("isLoggedIn"));//here we ask to obje is it has these values it return truw because it has value isLogged in 