const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'location-api'
});

connection.connect((error) => {
    if(error){
        console.log('Veritabanına bağalanırken hata oluştu: ', error);
    }else{
        console.log('Veritabanı bağlandı');
    }
});

module.exports = connection;