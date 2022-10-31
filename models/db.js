//DATABASE
const db = require('diskdb');
db.connect('./data', ['cervezas','bares'])

if (!db.cervezas.find().length) {
    const cerveza = [
    {
        "Nombre": "DAMM INEDIT",
        "Descripcion": "Creada por los cerveceros de Damm junto a Ferrán Adriá y los sumilleres de El Bulli, se elabora con una mezcla de malta de cebada y trigo aromatizada con cilantro, piel de naranja y regaliz.",
        "Graduacion": "4,8º",
        "Envase": "Botella de 75cl",
        "Precio": "3,90€"
    }, {
        "Nombre": "ALHAMBRA 1925",
        "Descripcion": "Con su característica botella de color verde, se trata de una cerveza extra con una graduación de 6,8º. Se distingue por su peculiar toque acaramelado y por su perfecto y refrescante amargor final.Gran cuerpo y mucho equilibrio.",
        "Graduacion": "6,8º",
        "Envase": "Botella de 33 cl.",
        "Precio": "1€"
    }, {
        "Nombre": "MAHOU CINCO ESTRELLAS",
        "Descripcion": "Un auténtico clásico entre nuestras cervezas. Muy ligera y agradable, resulta especialmente refrescante. Con una ligera acidez, sabor a cebada tostada y un correcto amargor final.",
        "Graduacion": "5,5º",
        "Envase": "Pack de 6 botellines de 25 cl.",
        "Precio": "2,70 euros."
    }, {
        "Nombre": "SAN MIGUEL 1516",
        "Descripcion": "Entre las varias opciones de esta marca, una de las más internacionales de las españolas, destaca esta 1516 elaborada según métodos tradicionales. Fresca, amarga y con baja graduación, lo que la hace muy agradable a cualquier hora.",
        "Graduacion": "4,2º",
        "Envase": "Botella de 33 cl.",
        "Precio": "0,80€"
    }, {
        "Nombre": "CRUZ CAMPO GRAN RESERVA 1904",
        "Descripcion": "Cerveza cien por cien malta, de gran calidad. Intensa y equilibrada, con agradable final amargo. Graduación muy adecuada para acompañar cualquier tipo de comida.",
        "Graduacion": "6,4º",
        "Envase": "Botella de 33cl",
        "Precio": "1€"
    }, {
        "Nombre": "VOLL DAMM",
        "Descripcion": "Elaborada con el doble de malta, lo que le proporciona un sabor muy característico, y un cuerpo intenso y peculiar, diferente de otras. Alta graduación alcohólica. Adecuada para tomar como copa.",
        "Graduacion": "7,2º",
        "Envase": "Botella de 33cl",
        "Precio": "1,10€"
    }, {
        "Nombre": "ÁMBAR ESPECIAL",
        "Descripcion": "La Zaragozana es una centenaria fábrica de cervezas de la capital zaragozana. Ofrece una amplia variedad. La más atractiva es esta Especial, una lager de baja fermentación que resulta muy fácil y agradable de beber.",
        "Graduacion": "5,2º",
        "Envase": "Botella de 33cl",
        "Precio": "0,90€"
    }, {
        "Nombre": "MORITZ",
        "Descripcion": "Una cerveza casi artesanal, que es una institución en Barcelona desde 1856. En su elaboración se emplean agua de un manantial de Vichy Catalán y flores de lúpulo en lugar de extractos, lo que le confiere más aroma y menos amargor.",
        "Graduacion": "5,4º",
        "Envase": "Botella de 33cl",
        "Precio": "1,20€"
    }, {
        "Nombre": "BRABANTE BLANCA",
        "Descripcion": "Elaborada en Bélgica con métodos tradicionales, se puede considerar española pues la hacen empresarios madrileños para el mercado nacional. De sus variedades destaca esta blanca de trigo, ligera y suave.",
        "Graduacion": "5º",
        "Envase": "Botella de 33cl",
        "Precio": "1,50€"
    }];
    db.cervezas.save(cerveza);
 }

 if (!db.bares.find().length) {
    const bar = [
    {
        "Nombre":"Kulas-Heller",
        "Direccion":"17 Valley Edge Court",
        "Ciudad":"Stockholm",
        "Telefono":"9621230835"
    }, {
        "Nombre":"Cummings-Schulist",
        "Direccion":"81722 Porter Hill",
        "Ciudad":"Luxor",
        "Telefono":"4573538699"
    }, {
        "Nombre":"Stamm-Christiansen",
        "Direccion":"22995 John Wall Hill",
        "Ciudad":"Laba Goumen",
        "Telefono":"3471271514"
    }]
    db.bares.save(bar);
 }
 
 module.exports = db