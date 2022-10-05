let fs=require('fs')

console.log("executed before")

// fs.readFile('./files/file','utf8',function(error,data)
// {
//     console.log(data)
// })

let data=fs.readFileSync('file','utf8')

console.log(data)

console.log("executed after")