const {readFile} = require('fs')

console.log('Started a first task')

readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})

console.log('Startig Second task')
console.log('Second task is running')