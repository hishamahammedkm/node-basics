const Promise = require('promise')
function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hisham')
        },3000)
    })
}
function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('123')
        },2000)
    })
}
// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })
async function getUser(){
    data =await getName()
    console.log(data)
}
getUser()