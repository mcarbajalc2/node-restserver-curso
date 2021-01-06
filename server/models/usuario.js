const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

//personalizar el metodo que convierte la coleccion de MongoDB a JSON
usuarioSchema.methods.toJSON = function() {
    let user = this; // captura la colleción
    let userObject = user.toObject(); // la convierte en objeto
    delete userObject.password; //elimina la contraseña
    return userObject; // retorna el objeto
};

//personaliza el mensaje de erro en caso que se registre otra tupla con un valor que debiera ser unico
usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser único'
});
module.exports = mongoose.model('Usuario', usuarioSchema);