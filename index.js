const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors()) ;
app.use(express.json());


app.get('/', (req,res)=>{
    res.send('hello there, im from nutshell')
})

const users = [
    {id:1, name:'tahmid', email:'rahmid@gmail.com'},
    {id:2, name:'rahmid', email:'tahmid@gmail.com'},
    {id:3, name:'ahmid', email:'ahmid@gmail.com'}
]


const fruits = [
    {id:1,name: 'banana'},
    {id:2,name: 'jackfruit'},
    {id:3,name: 'orange'},
    {id:4,name: 'mango'},
    {id:5,name: 'apple'},
]


app.get('/users',(req,res)=>{
    if(req.query.name){
        const searched = req.query.name;
        const matched = users.filter(user=> user.name.includes(searched))
        res.send(matched)
    }
    else{
        res.send(users)
    }
    
})

app.get('/fruits',(req,res)=>{
    res.send(fruits)
})

app.post('/user',(req,res)=>{
    const user = req.body;
    user.id = users.length +1;
    users.push(user)
    res.send(user)
})

app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user =users.find(u=> u.id === id);
    res.send("finding")
})

app.listen(port, ()=>{
    console.log('im riding on the shit')
})