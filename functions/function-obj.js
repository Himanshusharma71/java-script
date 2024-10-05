// console.log("functions");

function SayMyName(){
    console.log("himanshu");
    console.log("himanshu");
    console.log("himanshu");
    console.log("himanshu");
    console.log("himanshu");
}
// SayMyName(); 

// function addTwoNumbers(num1, num2){//this is peramenter
    
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){//this is peramenter
    // let result=num1 +num2;
    // return result;

    return num1 + num2
}


// addTwoNumbers(3,7)//return 10 //arguments 3,7
// addTwoNumbers(3,"4")//this return 34 

const result=addTwoNumbers(8,9);

// console.log("result : ",result);//gives undefine
// function loginUser(username="robot") //this is default value given if user not passing anything then it show robot in the the if condition is not passing 
function loginUser(username){
    if(username===undefined){
        console.log("please enter username")
        return
    }
    // if(!username){//this code is also same as upper code for asking if user is undefine or not
    //     console.log("please enter username")
    //     return
    // }
    return `${username} just logged in`
}
// console.log(loginUser("himanshu"))
console.log(loginUser())// if any one is not pass the value then it show the undefine not null