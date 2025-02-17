function College(message,abc){
    console.log(message);
    abc()
}
function callbackCollege(){
    console.log("Welcome back to SJIT");
}
College("Welcome to SJIT",callbackCollege);