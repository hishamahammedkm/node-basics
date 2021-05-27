const express = require('express')
const path = require('path')
const app = express()
app.use((req,res,next)=>{
    console.log('middleware')
    next()
})
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'form.html'))
    console.log('responsed')
    next()
})
app.use((req,res)=>{
    console.log('end')
})
app.listen(8000,()=>console.log('server is running'))