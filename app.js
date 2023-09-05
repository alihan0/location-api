const express = require('express');
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

// Örnek Veri

//const countries = db.query('SELECT * FROM countries');

const state = [{id:32, name : "state1", country : 12}];
const ctires = [{id: 25, name : "City1", state : 32}];

app.use(express.json());

app.get('/country/all', (req, res) => {
    db.query('SELECT * FROM countries', (err, results) => {
        if(err){
            console.error('veritabanı sorusuna hata oluştu: ', err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(results);
    });
});

app.get('/country/id/:id', (req, res) => {
    const countryID = parseInt(req.params.id);
   
    db.query('SELECT * FROM countries WHERE id = ?', [countryID], (err, results) => {
        if(err){
            console.error('veritabanı sorusuna hata oluştu: ', err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(results);
    })
    
});

app.get('/country/slug/:slug', (req, res) => {
    db.query('SELECT * FROM countries WHERE iso2 = ?', [req.params.slug], (err, result) => {
        if(err){
            console.error('Veritabanı hatası oluştu: ', err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
})