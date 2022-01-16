const nameModel = require('../model/nameModel')

module.exports.listUser = async () => {
    let response = new nameModel();
    let result = await response.list();
    return result;
}

module.exports.searchuser = async (user) => {
    let response = new nameModel();
    let result = await response.search(user);
    return result;
}

module.exports.updateiduser = async (user) => {
    let response = new nameModel();
    let result = await response.updateid(user);
    return result;
}

module.exports.addUser = async (user) => {
    let response = new nameModel();
    let result = await response.add(user);
    if (result) {
        return "El usuario a sido agregado";
    } else {
        return "No se pudo agregar el usuario";
    }

}
module.exports.updateUser = async (user) => {
    let response = new nameModel();
    let result = await response.update(user);
    if (result) {
        return "El usuario a sido actualizado";
    } else {
        return "No se pudo actualizar el usuario";
    }

}
module.exports.deleteUser = async (user) => {
    let response = new nameModel();
    let result = await response.delete(user);
    if (!result) {
        return "ocurrio un error";
    } else {
        return "No se encuentra o ya fue eliminado el usuario";
    }

}