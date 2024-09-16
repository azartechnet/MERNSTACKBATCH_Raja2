var fs=require('fs')
//Synchrous read
var data=fs.readFileSync('azar.txt')
console.log(data.toString())

//Asynchrous read
fs.readFile('azar.txt',function(err,data){
    if(err)
        console.log("Error")
    else
        console.log("Your data is::"+data.toString())
})