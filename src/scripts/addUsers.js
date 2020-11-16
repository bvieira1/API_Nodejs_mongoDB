const database = require('../services/database');

const Usuario = require('../models/usuario');
const usuarioJson = require('../data/usuario.json');

const addUUsers = async() => {
    try {
        for (let usuario of usuarioJson) {
            console.log(`Inserindo ${usuario.nome}`)
            await new Usuario(usuario).save();
        }
        console.log('Final do Script')
    } catch (err) {
        console.log(err.message);

    }
}

addUUsers();