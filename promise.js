// function add(num1,num2,callback){
//     let error = false
//     if(num1===0){
//         error=true

//     }
//     callback(num1+num2,error)
// }
// function mul(num1,num2,callback){
//     callback(num1*num2)
// }
// function div(num1,num2,callback){
//     callback(num1/num2)
// }
// add(10,20,(sum,error)=>{
//     if(error){
//         console.log('first number is zero')
//     }
//     else{
//         console.log(sum)
//         mul(sum,sum,(p)=>{
//             console.log(p)
//             div(p,2,(result)=>{
//                 console.log(result)
//             })
//         })

//     }
    

// })
const Promise = require('promise')
function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1===0){
            reject('first number is zero')
        }
        resolve(num1+num2)
    })
}
function mul(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2===0){
            reject('num2 number is 2')
        }
        resolve(num1*num2)
    })
}
function div(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1===0){
            reject('division imposibler')
        }
        resolve(num1/num2)
    })
}
add(10,20).then((result)=>{
    console.log(result)
    return mul(result,2)
}).then((result)=>{
    console.log(result)
    return div(result,10)
}).then((result)=>{
    console.log(result)
})
.catch((e)=>{
    console.log(e)
})