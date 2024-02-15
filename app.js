const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

 const app= express();
 
 app.set('view engine', 'ejs');
 app.use(express.static('public'));
 const dbUsername = 'node-tuts';
 const dbPassword = 'dhanu123';
 const dbName = 'node-tuts';
 const dbUrl = `mongodb+srv://${dbUsername}:${dbPassword}@nodetuts.ntaa6kl.mongodb.net/${dbName}?retryWrites=true&w=majority`;
 mongoose.connect(dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then((result) => {
   console.log("db connected");
   app.listen(3000);
})
.catch((err) => {
   console.log(err);
});

//mongoose and mongo sandbox routs



 app.get('/',(req,res)=>{
     res.redirect('/blogs');
 });
 //routes

 app.get('/blogs',(req,res)=>{
Blog.find()
  .then((result)=>{
   res.render('index',{title:'all blogs', blogs: result})
  })
  .catch((err)=>{
   console.log(err);
  })
})
 app.get('/about',(req,res)=>{
    res.render('about.ejs',{title:'about'});
 });
 app.get('/blog/create',(req,res)=>{
res.render('create.ejs',{title:'create'})
    
 });
 
 app.use((req,res)=>{
    res.status(404).render('404.ejs',{title:404})
 });



 