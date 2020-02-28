const { addNewVisitor, createTable, viewVisitor, updateVisitor, deleteVisitor, deleteAllVisitors} = require('./database')
const express = require('express');
const path = require('path');
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false}));

createTable()
addNewVisitor();
app.post('/addNewVisitor', async(req, res) => {
     console.log(JSON.stringify(req.body));
     const visitor = req.body.name;
     const assistant_name = req.body.assistant;
     const visitors_age = req.body.age;
     const time_of_visit = req.body.time;
     const date_of_visit =req.body.date;
     const comments =req.body.comment;
     const newVisitor = await  addNewVisitor(visitor, visitors_age, date_of_visit, time_of_visit, assistant_name,comments);
 
    res.send(JSON.stringify(newVisitor));
    res.end();

})

app.delete('/deleteVisitor:id', (req, res) =>{

})

app.delete('/deleteAllVisitors', (req, res) =>{

})

app.get('/viewVisitor:id', (req, res) =>{
    let visitor = visitor.viewVisitor(c.id === parseInt(req.params.id));
    if(!visitor) res.status(404).send("the visitor by that id is not found")
    res.send(visitor);
})

app.get('/viewAllVisitors', (req, res) =>{

})

app.put('/updateVisitor', (req, res) =>{

})




const server = app.listen(3000, () => {
    console.log('app is listening to port http://localhost:3000')
})
