const express=require('express')
const Routes=express()
const passwordGenerates=require('./PasswordGen')


Routes.post('/password',passwordGenerates.passwordGenerate)
Routes.get('/helo',(req,res)=>{
res.json({"message":"heooooo"})
})


module.exports=Routes;
