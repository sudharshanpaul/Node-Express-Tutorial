const {readFile} = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err, result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
.then((result) => console.log(resolve))
.catch((err)=> console.log(err))



