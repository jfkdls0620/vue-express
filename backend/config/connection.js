var mysql = require('mysql');

// connection 객체 생성
var connection = mysql.createConnection({
    host : 'localhost',
    port: '3306',
    user: 'root',
    password: '12341234',
    database: 'test_table'
});

// Connerction
connection.connect(function (err){
    if(err){
        alert("err");
        console.error(err);
        throw err;
    }
});

module.exports = connection;
