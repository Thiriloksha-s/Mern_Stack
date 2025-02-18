/*function promiseEg(){
    return new Promise((resolve,reject)=>{
         resolve("The promise is resolved")
    })
}
console.log(promiseEg())

function promiseEg(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("The promise is resolved")
        },5000)
         
    })
}
//console.log(promiseEg())
promiseEg().then((res)=>{
    console.log(res)
})

function promiseEg(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value)
               resolve("The promise is resolved")
            else
                reject("The promise is rejected due to value is not met")
        },5000)
    })
}
promiseEg(false).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})*/


// Location Finder
// 1. Promise(LocFound,LocNotFound)
// 2. Chennai,2000

function locationFinder(loc,time){
    var location=new Promise((locFound,locNotFound)=>{
          setTimeout(() => {
            if(isLocationFound(loc,time))
                locFound("Chennai")
            else
                locNotFound(loc+"Not Found")
          }, time);
    }) 
    location.then((found)=>{
        console.log(found);
    }).catch((Notfound)=>{
        console.log(Notfound);
    })
}
isLocationFound=((loc,time)=>{
     location="Chennai"
     t=3000
     if(loc===location && t<=time) return true
     else return false
})
locationFinder("Chennai",2000)