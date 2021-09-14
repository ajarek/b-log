const express = require('express')
const mongoose =require('mongoose')
const app =express()
const port=process.env.PORT||3000
const url = 'mongodb://127.0.0.1:27017/mongo-test'
//cd mongodb>bin\mongod --dbpath data
//connect to the mongodb database
mongoose.connect(url,()=>{console.log('Connection to mongodb database was successful!');})
//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine' ,'ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/compose'))

//server configuration 
app.listen(port,()=>console.log('Server started listening on port:'+port))