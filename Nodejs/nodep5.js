var f1=require('fs')
f1.readFile('azar.txt',function(err,data){
    if(err)
        console.log("Error")
    else
        console.log("Your data is::"+data.toString())
})