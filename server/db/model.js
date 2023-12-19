import { DataTypes, Model } from 'sequelize'
import connectToDB from './db.js'
import url from 'url'
import util from 'util'


const db = await connectToDB('postgress://store')

class Product extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true

        },
        description: {
            type: DataTypes.STRING(200)
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        s: {
            type: DataTypes.INTEGER
        },
        m: {
            type: DataTypes.INTEGER
        },
        l: {
            type: DataTypes.INTEGER
        },
        xl: {
            type: DataTypes.INTEGER
        },
        sales: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        modelName: 'product',
        sequelize: db
    }
)


class Image extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Image.init(
    {
        urlid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING
        }
    },
    {
        modelName: 'image',
        sequelize: db
    }
)


class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

User.init(
    {
        userid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        modelName: 'user',
        sequelize: db
    }
)