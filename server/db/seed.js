import { Product, User, Cart } from './model.js';


await User.create( {
    userName: 'Rikki',
    password: 113,
    admin: true
})

await Cart.create({
    firstName: 'David',
    lastName: 'Miller',
    email: 'david.miller@email.com',
    order: 'Red Hoodie',
    itemQty: '3'
}) 

const allProducts = [
    { name: 'Red Hoodie', description: 'A warm red piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
    { name: 'Blue Hoodie', description: 'A warm blue piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
    { name: 'Green Hoodie', description: 'A warm green piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
    { name: 'Pink Hoodie', description: 'A warm pink piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
]

for (const i of allProducts) {
    await Product.create(i)
}

