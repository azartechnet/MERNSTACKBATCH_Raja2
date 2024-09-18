var fs=require('fs')
fs.writeFile('file2.txt',"mohamedazar",function(err){
    if(err)
        console.log(err)
    else
        console.log("File Created")
fs.readFile("file2.txt",function(err,d){
    if(err)
        console.log(err)
    else
        console.log(d.toString())
})
})
