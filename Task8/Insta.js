// Instagram console demo for post, like, comment, share

likeCode = async ()=>{
    return new Promise((likepost,reject) => {
        setTimeout(() => {
            var islike=true;
            islike?likepost("Liked the post successfully"):reject("Unlike the post")
        }, 5000);
    })
}
commentCode = async ()=>{
    return new Promise((commentpost, reject) => {
        setTimeout(() => {
            var docomment=false;
            docomment?commentpost("Commented on the post"):reject("Uncomment the post")
        }, 5000);
    })
}
shareCode = async ()=>{
    return new Promise((sharepost,reject) => {
        setTimeout(() => {
            var doshare=false;
            doshare?sharepost("Shared the post successfully"):reject("Unshare the post")
        }, 5000);
    })
}
async function postCode(){
    var post=new Promise((createpost,reject)=>{
        setTimeout(() => {
            var dopost=true;
            dopost?createpost("Post created successfully"):reject("Could not create the post")
        }, 5000);
    })
    try{
        const [pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
        console.log(pos)
        console.log(like)
        console.log(comment)
        console.log(share)
        
    }catch(error){
        console.log("Error: ",error)
    }
    
}
postCode()


