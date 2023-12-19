import { DataTypes, Model } from 'sequelize'
import connectToDB from './db.js'
import url from 'url'
import util from 'util'
import Sequelize from 'sequelize'


const db = await connectToDB('postgres:///store')

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
        urlId: {
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
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
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


class Order extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Order.init(
    {
       orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
       },
       status: {
            type: DataTypes.ENUM('pending', 'processing', 'canceled', 'delivered'),
            allowNull: false,
            defaultValue: 'pending'
       },
       createAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
       },
       updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
       }
    },
    {
        modelName: 'order',
        sequelize: db
    }
)


class Ordereditem extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Ordereditem.init (
    {
        orderedId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        cost: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        modelName: 'ordereditem',
        sequelize: db
    }
)


Image.belongsTo(Product, { foreignKey: 'id'})
Product.hasMany(Image, { foreignKey: 'id'})

Order.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Order, { foreignKey: 'user_id' });

// const mike = await User.create({userName: 'Mike Smith', email: 'mikesmith23@gmail.com', phone: '801-385-2127', password: '1234'})
// const order32 = await Order.create({})



await db.sync({ force: true });