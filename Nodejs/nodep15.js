var fs=require('fs')
var rs=fs.createReadStream('azar.txt')
var ws=fs.createWriteStream('file3.txt')
rs.pipe(ws)
console.log("Copy...")