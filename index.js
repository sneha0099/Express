require('dotenv').config()
const express = require('express');

const app = express()

const port = process.env.PORT 

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login' , (req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})