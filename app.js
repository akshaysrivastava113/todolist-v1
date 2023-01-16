
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let todoItems = [];

app.get('/r', (req,res) => {
    todoItems = [];
    res.redirect('/');
});

app.get('/', (req,res) => {
    let date = new Date().toLocaleDateString("en-US");
    let day = new Date().getDay();
    let type = '';
    switch(day){
        case 1: 
           day = 'Monday';
           type = 'Weekday'
           break;
        case 2: 
            day = 'Tuesday';
            type = 'Weekday'
            break;
        case 3: 
            day = 'Wednesday';
            type = 'Weekday'
            break;
        case 4: 
            day = 'Thursday';
            type = 'Weekday'
            break;
        case 5: 
            day = 'Friday';
            type = 'Weekday'
            break;
        case 6: 
            day = 'Saturday';
            type = 'Weekend'
            break;
        case 0: 
            day = 'Sunday';
            type = 'Weekend'
            break;
    }
    console.log(day);

    res.render('list', {todaysDate: date, todaysDay: day, newTodo: todoItems})

})

app.post('/', (req,res) => {
    let itemRec = req.body.fname;
    todoItems.push(itemRec);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log("Server started at 3000");
})

