const db = require('../models/db')

//Método que muestra todas las cervezas
function getBeers(req, res){
    const {Nombre, Descripcion, Graduacion, Envase, Precio='1.5€' } = req.query;
    const beers = db.cervezas.find({ Nombre, Descripcion, Graduacion, Envase, Precio });
    if(beers.length) {
        res.json(beers);
    }else {
        res.json({ message: 'No hay cervezas con esos filtros.' })
    }
}

//Método que muestra una cerveza a partir de su id
function getBeer(req, res){
    const beerId = req.params.id;
    const beers = db.cervezas.find({ _id: beerId });
    if (beers.length) {
        res.json(beers);
    } else {
        res.json({ message: `La cerveza con id ${beerId} no existe` })
    }
}

//Método que añade una nueva cerveza
function addBeer(req, res){
    const beer = req.body;
    db.cervezas.save(beer);    
    console.log('Añadida nueva cerveza.');
    res.json(beer);  
}

//Método que elimina una cerveza a partir de su id
function deleteBeer(req, res){
    const beerId = req.params.id;
    const beer = db.cervezas.find({ _id: beerId });
    if (beer.length) {
        db.cervezas.remove({ _id: beerId });
        console.log("Borrada cerveza con id: ", beerId);
        res.json(db.cervezas.find());
    } else {
        res.json({ message: `La cerveza con id ${beerId} no existe` })
    }
    
}

//Método que actualiza una cerveza a partir de su id
function editBeer(req, res){
    const beerId = req.params.id;
    const beer = req.body;
    const beers = db.cervezas.find({ _id: beerId });
    if (beers.length) {
        db.cervezas.update({ _id: beerId }, beer);
        console.log("Editando cerveza con id: ", beerId);
        res.json(beer);
    } else {
        res.json({ message: `La cerveza con id ${beerId} no existe` })
    }
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer }