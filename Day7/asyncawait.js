/*async function asAw(){
    console.log("Hello");
}
console.log(asAw())*/

async function asAw(){
    setTimeout(function(){
        console.log("Hello");
    },5000)
}
console.log(asAw().then())

