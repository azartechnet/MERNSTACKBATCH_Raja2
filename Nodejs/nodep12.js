const h1=require('http')
function printMessage()
{
    console.log("Hello every 2 secondds..")
}
setInterval(printMessage,2000)
