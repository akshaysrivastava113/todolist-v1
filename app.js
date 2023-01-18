
const express = require('express');
const bodyParser = require('body-parser');
const date = require('./date.js');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let todoItems = [];
let workTodoItems = [];

app.get('/r', (req,res) => {
    todoItems = [];
    workTodoItems = [];
    res.redirect('/');
});

app.get('/', (req,res) => {
    let date1 = date.getDate();
    let date2 = date.getDay();
    res.render('list', {listTitle: date1, newTodo: todoItems})
})

app.post('/', (req,res) => {
    let itemRec = req.body.itemInp;
    if(!itemRec){
    }
    else {
    todoItems.push(itemRec);
    res.redirect('/');
    }
});

app.get('/work', (req,res) => {
    res.render('list', {listTitle: "Work List", newTodo: workTodoItems })
});

app.post('/work', (req,res) => {
    workTodoItems.push(req.body.itemInp);
    res.redirect('/work');
});


app.listen(3000, () => {
    console.log("Server started at 3000");
})

