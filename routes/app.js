const { addNewVisitor, createTable, viewVisitor, updateVisitor, deleteVisitor, deleteAllVisitors, listVisitor} = require('./database')
const express = require('express');
const path = require('path');
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false}));

createTable();

app.post('/addNewVisitor', async(req, res) => {
     console.log(JSON.stringify(req.body));
     const visitor = req.body.name;
     const assistant_name = req.body.assistant;
     const visitors_age = req.body.age;
     const time_of_visit = req.body.time;
     const date_of_visit =req.body.date;
     const comments =req.body.comment;
     const newVisitor = await  addNewVisitor(visitor, visitors_age, date_of_visit, time_of_visit, assistant_name,comments);
            //console.log(newVisitor);
            
    res.send(JSON.stringify(newVisitor));    
    res.end();
        
})

app.delete('/deleteVisitor/:id', async(req, res) =>{
    const removeVisitor = await deleteVisitor(req.params.id);

    res.send(JSON.stringify(removeVisitor))
    res.end();

})

app.delete('/deleteVisitors', async(req, res) =>{ 
    const removeAll = await deleteAllVisitors()

    res.send(JSON.stringify(removeAll));
    res.end();

})

app.get('/viewVisitor/:id', async(req, res) =>{
    const  visitor = await viewVisitor(req.params.id);
    
    res.send(JSON.stringify(visitor));
    res.end();
})



    app.get('/viewAllVisitors', async(req, res) =>{

    const allVisitors = await listVisitor()

    res.send(JSON.stringify(allVisitors));
    res.end();

})

app.put('/updateVisitor/:id', async (req, res) =>{
    console.log(JSON.stringify(req.body));
    const visitor = req.body.name;
    const assistant_name = req.body.assistant;
    const visitors_age = req.body.age;
    const time_of_visit = req.body.time;
    const date_of_visit =req.body.date;
    const comments =req.body.comment;
    const id = req.params.id;
    const update = await updateVisitor(visitor, visitors_age,assistant_name, date_of_visit, time_of_visit,comments, id);

    res.send(JSON.stringify(update));
    res.end();

})




const server = app.listen(3000, () => {
    console.log('app is listening to port http://localhost:3000')
})

module.exports = server;
