const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect( '**** mongo url *****' , {
    //userFindAndModify: false,
  // userUnifiedTopology: true,
//    userCreateIndex: true,
   userNewUrlParser: true
   
}).then(
    ()=>{console.log(' Db Connected')}
).catch((err)=>{console.log(err) } 
);




// app.get('/', (req, res) => {
//   res.render('hello.ejs');  //render that file
// });


app.post('/api/users/register', (req,res)=>{
    res.send('Register route');
});


app.post('/api/users/login', (req,res)=>{
    res.send('Login route');
});

app.put('/api/users/update', (req,res)=>{
    res.send('Update route');
});


app.delete('/api/users/:id', (req,res)=>{
    res.send('Delete route');
});


app.get('/api/users/', (req,res)=>{
    res.send('Fetch route');
});




app.listen(3000);

//mongodb+srv://rahulkcr97:<password>@cluster0.cpbpk.mongodb.net/test
