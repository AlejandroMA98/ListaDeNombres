const nameController = require('../controller/namecontroller');

module.exports = async (app) => {

    // Muestra la lista de usuarios
    app.get('/users',async(req,res) => {
        res.send(await nameController.listUser());
    });

    //Mostrar el usuario buscado
    app.get('/search/:name',async(req,res) => {
        let user = req.params.name;
        res.send(await nameController.searchuser(user));
    });

    //Mostrar el usuario actualizado
    app.get('/updateusersid/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await nameController.updateiduser(user));
    });

    // Agrega un nuevo usuario
    app.post('/addusers',async(req,res) => {
        let user = req.body;
        res.send(await nameController.addUser(user));
    });

    //Actualización de Usuario
    app.patch('/updateusers',async(req,res) => {
        let user = req.body;
        res.send(await nameController.updateUser(user));
    });

    //Eliminar usuario
    app.delete('/deleteusers/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await nameController.deleteUser(user));
    });

};



