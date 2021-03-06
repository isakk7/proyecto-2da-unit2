const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let librosSchema = new Schema({
    clave: {
        type: String,
        required: [true, 'La clave del libro es obligatorio']
    
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del libro obligatorio']
    },
    precioUni: {
        type: Number,
        required: [true, 'El precio del producto es obligatorio']
    },
    categoria: {
        type: String,
        ref: 'Categoria'
    },
    disponible: {
        type: String,
        ref: 'Libros'
    }
});

module.exports = mongoose.model('libros', librosSchema);