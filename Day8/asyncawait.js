/*async function asAw(){
    setTimeout(function(){
        console.log("Hello");
    },5000)
}
console.log(asAw())
asAw().then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})

async function asAw(){
    var a=15;
    setTimeout(function(){
        console.log("Hello");
    },5000)
    console.log(await a)
}
asAw()*/




// Instagram console demo for post, like, comment, share

likeCode = async ()=>{
    return new Promise((likepost) => {
        setTimeout(() => {
            likepost("Liked the post successfully")
        }, 5000);
    })
}
commentCode = async ()=>{
    return new Promise((commentpost) => {
        setTimeout(() => {
            commentpost("Commented on the post")
        }, 5000);
    })
}
shareCode = async ()=>{
    return new Promise((sharepost) => {
        setTimeout(() => {
            sharepost("Shared the post successfully")
        }, 5000);
    })
}
async function postCode(){
    var post=new Promise((createpost)=>{
        setTimeout(() => {
            createpost("Post created successfully")
        }, 5000);
    })
    const [pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(pos)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postCode()


