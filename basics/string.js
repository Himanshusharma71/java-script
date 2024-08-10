const name="himanshu"
const repoCount=40

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// another method of declaring String

const gameName=new String('Phantom-pain-matel ');//this show the string and provide you many methods
console.log(gameName)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3));//by this you can see in specific position which cheractor is store 
// console.log(gameName.indexOf('n'));//this show thw index of your charactor 

// console.log(gameName.substring(0,4))//here the last charactor is not include
// console.assert(gameName.slice(-12,3))
const newGame="  battel field"
console.log(newGame.trim())//this is remove starting space and end space of the string

const url="https//hitesh.com/hitesh%20sharma"
console.log(url)

//if we want to change %20 to another like -- then we used replace function

const  newUrl = url.replace('%20','-')
console.log(newUrl)

// if you want to know himanshu is present in perticular string then we used include() function

console.log(url.includes("himanshu"))//it reply false 

//if you want to seperate the string on bases - or any thing you can used the split()

console.log(gameName.split('-'))//it return the array where all the things is saperates - is store like elements in array form




