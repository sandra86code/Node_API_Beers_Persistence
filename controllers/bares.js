const db = require('../models/db')

//Método que muestra todos los bares
function getBars(req, res){
    res.json(db.bares.find());
}

//Método que muestra un bar a partir de su id
function getBar(req, res){
    const barId = req.params.id;
    const bars = db.bares.find({ id: barId });
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
    res.json(db.bares.find());
}

//Método que elimina un bar a partir de su id
function deleteBar(req, res){
    const barId = req.params.id;
    const bars = db.bares.find({ id: barId });
    if (bars.length) {
        db.bares.remove({ id: barId });
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
    const bars = db.bares.find({ id: barId });
    if (bars.length) {
        db.bares.update({ id: barId }, bar);
        console.log("Editando bar con id: ", barId, " que ahora es ", bar);
        res.json(db.bares.find());
    } else {
        res.json({ message: `El bar con id ${beerId} no existe` })
    }
}

module.exports = { getBars, getBar, addBar, deleteBar, editBar }