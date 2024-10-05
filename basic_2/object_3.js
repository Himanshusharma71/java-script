// Destructure 

const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructure:"hitesh"
}

const {courseInstructure: instructor} = course //this is a way to print the value on more efficient way in which you can easy and in sort way to print the value of the entity
console.log(instructor);