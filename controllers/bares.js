const db = require('../models/db')

//Método que muestra los bares filtrados
function getBars(req, res){
    const {Nombre, Direccion, Ciudad="Stockholm", Telefono } = req.query;
    const bars = db.bares.find({ Nombre, Direccion, Ciudad, Telefono });
    if(bars.length) {
        res.json(bars);
    }else {
        res.json({ message: 'No hay bares con esos filtros.' })
    }
}



//Método que muestra un bar a partir de su id
function getBar(req, res){
    const barId = req.params.id;
    const bars = db.bares.find({ _id: barId });
    if (bars.length) {
        res.json(bars);
    } else {
        res.json({ message: `El bar con id ${barId} no existe` })
    }
}

//Método que añade una nuevo bar
function addBar(req, res){
    const bar = req.body;
    db.bares.save(bar);    
    console.log('Añadido nuevo bar: ', bar);
    res.json(bar);
}

//Método que elimina un bar a partir de su id
function deleteBar(req, res){
    const barId = req.params.id;
    const bars = db.bares.find({ _id: barId });
    if (bars.length) {
        db.bares.remove({ _id: barId });
        console.log("Borrado bar con id: ", barId);
        res.json(db.bares.find());
    } else {
        res.json({ message: `El bar con id ${beerId} no existe` })
    }
    
}

//Método que actualiza un bar a partir de su id
function editBar(req, res){
    const barId = req.params.id;
    const bar = req.body;
    const bars = db.bares.find({ _id: barId });
    if (bars.length) {
        db.bares.update({ _id: barId }, bar);
        console.log("Editando bar con id: ", barId);
        res.json(bar);
    } else {
        res.json({ message: `El bar con id ${beerId} no existe` })
    }
}

module.exports = { getBars, getBar, addBar, deleteBar, editBar }