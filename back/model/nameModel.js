const sequelize = require('../db/conexion');

module.exports = class namesModel {
    constructor(names){
        this.names = names
    }
    async list(){
        let result = await sequelize.query("SELECT * FROM users");
        return result;
    }
    async search(user){
        let result = await sequelize.query("SELECT * FROM users WHERE [name] LIKE '"+user+"%';");
        return result;
    }
    async updateid(user){
        let result = await sequelize.query("SELECT * FROM users WHERE id = "+user+";");
        return result;
    }
    async add(user){
        let result = await sequelize.query("INSERT INTO users([name],first_name,last_name,adress,phone)VALUES('"+user.name+"','"+user.first_name+"','"+user.last_name+"','"+user.adress+"','"+user.phone+"');");
        return result;
    }
    async update(update){
        let result = await sequelize.query("UPDATE users SET [name] = '"+update.name+"', first_name = '"+update.first_name+"',last_name = '"+update.last_name+"',adress = '"+update.adress+"',phone = '"+update.phone+"'WHERE [id] = '"+update.id+"';");
        return result;
    }
    async delete (userdelete){
        let result = await sequelize.query("DELETE FROM users WHERE [id]='"+userdelete+"';");
        return result;
    }
}