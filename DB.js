const { Sequelize, Model, DataTypes} = require('sequelize');
const ORM = require('./ORM');

// Option 1: Passing a connection URI


class DB {
    constructor({ NAME }) {
        console.log(NAME);
        const sequelize = new Sequelize('postgres://postgres:9631232004@127.0.0.1:5432/'+NAME,
            {
            dialect: 'postgres'
          },
        );
        this.db;
        this.orm;
        try {
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            sequelize.close();
        }
        this.db = sequelize;
        
        this.orm = new ORM(sequelize);
        
        /*sqlite.open(path.join(__dirname, NAME), sqlite3.Database).then(async db => {
            this.db = db;
            this.orm = new ORM(db);
        });*/

    }

    destructor() {
        if (this.db) sequelize.close()
    }

    getUserByName(name) {
        return this.orm.detail('user', { name });
    }

    getUserByLogin(login) {
        return this.orm.detail('user', { login });
    }

    getUserByToken(token) {
        return this.orm.detail('user', { token });
    }

    addUser(login, password, name) {
        return this.orm.add('user', 'login, password, name', [login, password, name]);
    }

    setToken(token, login) {
        return this.orm.update('user', { token }, { login });
    }
}

module.exports = DB;