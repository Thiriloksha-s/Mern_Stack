//Conditional Statement
/*
1.Normal if
2.If...else...
3.nested if..
4.else if ladder
5.switch
if(5>10){
    console.log(true);
}else{
    console.log(false);
}

// Looping Statement
1.while
2.do...while
3.for(;;)
4.forin
5.forof
6.forEach*/

array=[10,20,30,"abc",true,"hello",[10,20,30]]
for(i of array){
    console.log(i);
}
object1={
    firstname:"St.Joseph's",
    "lastname":"Institute of Technology",
    "depts":["CSE","IT","ADS","ECE"],
    "training":"MERN"
}
for(i in object1){
    console.log(i);
}
/*for(i of object1){
    console.log(i);
}*/
for([key,value] of Object.entries(object1)){
    console.log(key,value);
}

array.forEach((ele)=>{
    console.log(ele);
})

Object.keys(object1).forEach((key)=>{
    console.log(key);
})

Object.entries(object1).forEach((key,ele)=>{
    console.log(key,ele);
})