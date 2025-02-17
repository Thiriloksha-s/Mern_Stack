/*function College(message,abc){
    console.log(message);
    abc()
}
function callbackCollege(){
    console.log("Welcome back to SJIT");
}
College("Welcome to SJIT",callbackCollege);*/

function formSubmission(message,cbFun){
    if(cbFun()){
        console.log(message); 
    }else{
        console.log("Form submission unsuccessful");
    }
}
function formValidation(){
    console.log("Form validation successful")
    return true
}
formSubmission("Form submitted successful",formValidation)
