const express = require('express');
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

// Örnek Veri

const countries = [{id : 34, name : "Turkey"}];
const state = [{id:32, name : "state1", country : 12}];
const ctires = [{id: 25, name : "City1", state : 32}];

app.use(express.json());

app.get('/countries', (req, res) => {
    res.json(countries);
});

app.get('/country/:id', (req, res) => {
    const countryID = parseInt(req.params.id);
    const country = countries.find(c => c.id === countryID);
    if(!country){
        return res.status(404).json({message: "Ülke bulunamadı"});
    } 
    res.json(country);
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
})