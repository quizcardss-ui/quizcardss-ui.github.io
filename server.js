
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Conexión a MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quizcards'
});

// Endpoint de prueba
app.get('/api/cuatrimestres', (req,res)=>{
    conn.query("SELECT * FROM cuatrimestres", (err,data)=>{
        if(err){
            return res.status(500).json({error: err});
        }
        res.json(data);
    });
});

// Servidor
app.listen(3000, ()=> console.log("API corriendo en el puerto 3000"));
