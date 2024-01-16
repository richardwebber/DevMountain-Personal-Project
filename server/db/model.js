import { DataTypes, Model, Sequelize } from 'sequelize'
import connectToDB from './db.js'
import url from 'url'
import util from 'util'


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
            allowNull: true,
            defaultValue: ''

        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: ''
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: null
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        s: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        m: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        l: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        xl: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
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
            type: DataTypes.STRING,
            allowNull: false
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


class Cart extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Cart.init(
    {
       orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
       },
       firstName: {
            type: DataTypes.STRING,
            allowNull: false
       },
       lastName: {
            type: DataTypes.STRING,
            allowNull: false
       },
       email: {
            type: DataTypes.STRING,
            allowNull: false
       },
       order: {
            type: DataTypes.STRING,
            allowNull: false
       },
       itemQty: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        modelName: 'cart',
        sequelize: db
    }
)


// class Item extends Model {
//     [util.inspect.custom]() {
//         return this.toJSON()
//     }
// }

// Item.init (
//     {
//         itemId: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         quantity: {
//             type: DataTypes.INTEGER,
//             allowNull: true,
//             defaultValue: 0
//         }
//     },
//     {
//         modelName: 'item',
//         sequelize: db
//     }
// )


// User.hasOne(Cart, { foreignKey: 'userId'})
// Cart.belongsTo(User, { foreignKey: 'userId'})

// Cart.belongsToMany(Item, { through: 'CartItem'})
// Item.belongsToMany(Cart, { through: 'CartItem' })

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
     console.log('Syncing database...');
     await db.sync();     
     console.log('Finished syncing database!');   }


// const mike = await User.create({userName: 'Mike Smith', email: 'mikesmith23@gmail.com', phone: '801-385-2127', password: '1234'})
// const bill = await User.create({userName: 'Bill Collins', email: 'billboybaggins@gmail.com', phone: '801-333-2111', password: '2222'})
// const order32 = await Cart.create({status: 'pending'})
// const product1 = await Product.create({name: 'shirt', description: 'This is a shirt', price: 20.00, s: 25, m: 30, l: 40, xl: 25})




export { Product, User, Cart }