// forEach loop 
object1={
    firstname:"St.Joseph's",
    "lastname":"Institute of Technology",
    "depts":["CSE","IT","ADS","ECE"],
    "training":"MERN"
}
Object.entries(object1).forEach(([key,ele])=>{
    console.log(key,ele);
})


// General function
function print(){
    return "Hii";
}
console.log(print());

// Anonymous function
const add=function(a,b){
    return a+b;
}
console.log(add(5,4));

// Named function
const sub=function subtract(a,b){
    return a-b;
}
console.log(sub(5,4));

// Arrow function
let printhello = (name) => "Hello " + name;
console.log(printhello("Kitty"));