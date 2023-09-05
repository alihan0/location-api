const express = require('express');
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ALL COUNTRIES
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

// COUNTRIES FILTER BY ID
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

// COUNTRIES FILTER BY COUNTRY CODE
app.get('/country/code/:slug', (req, res) => {
    db.query('SELECT * FROM countries WHERE iso2 = ?', [req.params.slug], (err, result) => {
        if(err){
            console.error('Veritabanı hatası oluştu: ', err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

// ALL STATES
app.get('/state/all', (req, res) => {
    db.query('SELECT * FROM states', (err, result) => {
        if(err){
            console.error("Veritabanı hatası oluştu: ", err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

// STATEES FILTER BY ID
app.get('/state/id/:id', (req, res) => {
    db.query('SELECT * FROM states WHERE id = ?', [req.params.id], (err, result) => {
        if(err){
            console.error('Veritabanı hatası: ', err);
            res.status(500).json({error : "veritabanı hatası!"});
            return;
        }
        res.json(result);
    })
});

// STATES FILTER BY COUNTRY
app.get('/state/country/:id', (req,res) => {
    db.query('SELECT * FROM states WHERE country_id = ?', [req.params.id], (err, result) => {
        if(err){
            console.error("Veritabanı hatası oluştu: ", err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

// ALL CITIES
app.get('/city/all', (req, res) => {
    db.query('SELECT * FROM cities', (err, result) => {
        if(err){
            console.log('Veritabanı hatası oluştu:', err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

app.get('/city/id/:id', (req, res) => {
    db.query('SELECT * FROM cities WHERE id = ?', [req.params.id], (err, result) => {
        if(err){
            console.log('Veritabanı hatası oluştu: ', err);
            res.status(500).json({error: "Veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

// CITIES FILTER BY COUNTRY
app.get('/city/country/:id', (req, res) => {
    db.query('SELECT * FROM cities WHERE country_id = ?', [req.params.id], (err, result) => {
        if(err){
            console.log("veritabanı hatası oluştu: ", err);
            res.status(500).json({error: "veritabanı hatası!"});
            return;
        }
        res.json(result);
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
})