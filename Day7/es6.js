/*
// Scoping
var a=10;
console.log(a);
// Scoping starts
{
    let a=20;
    console.log(a);
    const b=30;
    console.log(b);
    let c=40;
    console.log(c);
    var e=50;
    console.log(e);
    a=30;
    console.log(a);
    f=60;
}
console.log(a);
//console.log(b);//Reference error
console.log(f);
//console.log(c);//Reference error


// Interview question
let num=10;
while(num<=12){
    console.log(num);
    num++;
}
console.log(num);


// Ternary Operator
a=10;
console.log((a%2)?"odd":"even");

// Spread Operator(...) - Important
stud1year=["user1","user2","user3"]
stud2year=["user4","user5","user6"]
stud3year=["user7","user8","user9"]
stud4year=["user10","user11","user12"]
studDB=[...stud1year,...stud2year,...stud3year,...stud4year]
//console.log(studDB)

/*stud1year=["user1","user2","user3"]
stud2year=["user4","user5","user6"]
stud3year=["user7","user8","user9"]
stud4year=[]
studDB=[...stud1year,stud2year,...stud3year,...stud4year]
//console.log(studDB)

// Rest Operator(...)
function studentDB(...studDataBase){
    console.log(studDataBase);
}
studentDB(studDB);

// Destructuring Operator
var array=[10,20,30,40,50,60]
var[a,b]=array
console.log(a,b)

var array=[10,20,30,40,50,60]
var[a,b,c,d,e,f]=array
console.log(a,b,f)

var array=[10,20,30,40,50]
var[a,b,c,d,e,f]=array
console.log(a,b,f)


// Hoisting

// 1. Variable Hoisting

console.log(a);
var a=10

console.log(a);
let a=10
console.log(a);

console.log(b);
let a=10
console.log(a);

console.log(a);
const a=10
console.log(a);

// 2. Functional Hoisting

funHoisting()
function funHoisting(){
    console.log("Checking functional hoisting")
}

funHoisting1 = () => {
    console.log("checking functional Hoisting");
}
funHoisting1()

 // Classes and Objects
class ClassEg{
    classFun=()=>{
         console.log("Hello function from class");
    }
}
obj=new ClassEg()
console.log(obj.classFun())

// O/P :
// Hello function from class
// undefined*/


// Classes and Objects
class ClassEg{
    classFun(){
         console.log("Hello function from class");
    }
}

console.log(new ClassEg().classFun())