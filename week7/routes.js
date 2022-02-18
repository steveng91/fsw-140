const express = require('express')
const mysql = require("mysql2")
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
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

app.post('/todo', (req, res) =>{
    let post = {todo: req.body.todo, message:req.body.message};
    let myQuery = "insert into todos set ? ";
    //Run sql Command
    db.query(myQuery, post, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send("Row Inserted Successfully");
    });
});

// app.post('/todo', (req,res)=>{
//     let post = {todo: 'first todo', message: 'this is my first todo via a route'}
//     let myQuery = 'insert into todos set ?'
//     db.query(myQuery, post, (err, result)=>{
//         if(err){
//             throw err
//         }
//         console.log(result)
//         res.send('first row inserted successfully')
//     })
// })

// app.get('/insertRow2', (req,res)=>{
//     let post = {todo: 'second todo', message: 'this is my second todo via a route'}
//     let myQuery = 'insert into todos set ?'
//     db.query(myQuery, post, (err, result)=>{
//         if(err){
//             throw err
//         }
//         console.log(result)
//         res.send('second row inserted successfully')
//     })
// })

app.get('/todo', (req,res)=>{
    let myQuery = 'select * from todos'
    db.query(myQuery, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send(result)
    })
})

app.put('/todo/:id', (req,res)=>{
    let newTodo = req.body.todo
    let myQuery = `update todos set todo = '${newTodo}' where id = ${req.params.id}`
    db.query(myQuery, (err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        // res.send('todo updated successfully')
    })
    let newMessage = req.body.message
    let myQuery2 = `update todos set message = '${newMessage}' where id = ${req.params.id}`
    db.query(myQuery2, (err, result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('update successful')
    })
})

app.delete('/todo/:id', (req,res)=>{
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