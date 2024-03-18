const express=require('express')
const app=express()
const cors=require('cors')

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','PATCH','DELETE']
}))
app.use('/',require('./Routes'))
const PORT = process.env.PORT || 5000; // Use environment variable PORT if available, otherwise default to 5000

app.listen(PORT, () => {
    console.log("Server connected");
});




