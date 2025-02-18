// Location Finder
// 1. Promise(LocFound,LocNotFound)
// 2. Chennai,2000

function locationFinder(loc,time){
    var location=new Promise((locFound,locNotFound)=>{
          setTimeout(() => {
            if(isLocationFound(loc,time))
                locFound("Chennai")
            else
                locNotFound(loc+" Not Found")
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
     var t=1000
     if(loc===location && t<=time) return true
     else return false
})
locationFinder("Chennai",2000)