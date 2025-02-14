
//Objects

//1st type of object declaration

object1={
    firstname:"St.Joseph's",
    "lastname":"Institute of Technology",
    "depts":["CSE","IT","ADS","ECE"],
    "training":"MERN"
}
console.log(object1);
console.log(object1.depts)
console.log(object1['training'])

// 2nd type of object declaration

obj2={}
obj2["firstname"]="hello"
obj2["secondname"]="SJIT"
obj2["training"]=["Git","HTML","CSS","JS",'MERN',"React","Express","MongoDB","Hosting"]
console.log(obj2)

// 3rd type of object declaration
object3=new Object()
console.log(object3)
object3.training="MERN"
object3.Depts=["CSE","IT","ADS","ECE"]
console.log(object3.Depts)

obj3=new Object()
obj3["firstname"]="hi"
obj3["secondname"]="SJIT"
console.log(obj3)


//Set
set=new Set()
console.log(set);
set=new Set("hello")
console.log(set);
set=new Set(["hello"])
console.log(set);

set=new Set()
console.log(set);
set.add("Hello")
console.log(set);
set.add("Hello")
console.log(set);
console.log(typeof(set))