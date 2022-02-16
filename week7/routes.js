const express = require('express')
const mysql = require("mysql2")
const app = express()
const PORT = 9000

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: "Tyronehand9!",
        database: 'todo' 
    }
)
db.connect((err)=>{  
    if(err){
        throw err
    }
    console.log("database connected successfully")
})

app.get('/CreateDB', (req, res)=>{
    let sqlString = "Create DataBase todo"
    db.query(sqlString, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('todo database created successfully')
    })
})

app.get('/createTable', (req,res)=>{
    let myQuery = 'create table todos (id int auto_increment, todo varchar(100), message varchar(250), primary key(id))'
    db.query(myQuery, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('table created successfully')
    })
})

app.get('/insertRow1', (req,res)=>{
    let post = {todo: 'first todo', message: 'this is my first todo via a route'}
    let myQuery = 'insert into todos set ?'
    db.query(myQuery, post, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('first row inserted successfully')
    })
})

app.get('/insertRow2', (req,res)=>{
    let post = {todo: 'second todo', message: 'this is my second todo via a route'}
    let myQuery = 'insert into todos set ?'
    db.query(myQuery, post, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('second row inserted successfully')
    })
})

app.get('/displayRows', (req,res)=>{
    let myQuery = 'select * from todos'
    db.query(myQuery, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('select query successful')
    })
})

app.get('/updateRow/:id', (req,res)=>{
    let newTodo = 'this is an update to the todo column'
    let myQuery = `update todos set todo = '${newTodo}' where id = ${req.params.id}`
    db.query(myQuery, (err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('todo updated successfully')
    })
})

app.get('/deleteRow/:id', (req,res)=>{
    let myQuery = `delete from todos where id = ${req.params.id}`
    db.query(myQuery, (err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('todo successfully deleted')
    })
})

app.listen(PORT, ()=>{
    console.log('server running on port 9000')
})