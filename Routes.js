const express=require('express')
const Routes=express()
const passwordGenerates=require('./PasswordGen.js')


Routes.post('/password',passwordGenerates.passwordGenerate)

module.exports=Routes;
