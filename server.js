const express = require('express');
const res = require('express/lib/response');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: "Home",
        nombre: "Camila",
    });
});

app.get('/acerca.hbs', (request, response) => {
    response.render('acerca.hbs');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

/*
app.get('/', (req, res) => {
    //res.send('Hola mundo desde Express!!!');
    let salida = {
        nombre: 'Camila',
        edad: 19,
        url: req.url
    }

    res.send(salida);
});

app.get('/data', (req, res) => {
    res.send('data data data');
});
*/