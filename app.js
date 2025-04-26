// const {readFile, writeFile} = require('fs');
// const {promisify} = require('util');

// const readFilePromise = promisify(readFile)
// const writeFilePromise = promisify(writeFile)

// // const getText = (path) =>{
// //     return new Promise((resolve,reject)=>{
// //         readFile(path,'utf-8',(err, result)=>{
// //             if(err){
// //                 reject(err)
// //             }
// //             else{
// //                 resolve(result)
// //             }
// //         })
// //     })
// // }

// // getText('./content/first.txt')
// // .then((result) => console.log(result))
// // .catch((err)=> console.log(err))



// const start = async()=>{
//     try {
//         const first = await readFilePromise('./content/first.txt','utf-8')
//         const second = await readFilePromise('./content/second.txt','utf-8')
//         await writeFilePromise('./content/result-mind-grenade.txt',`This is awesoms ${first} ${second}`)
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

// console.log('Completed')


const {readFile, writeFile} = require('fs').promises;

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-mind-grenade.txt',`This is awesoms: ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()