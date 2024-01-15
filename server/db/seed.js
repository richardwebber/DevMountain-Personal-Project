import { Product } from './model.js';


// const user1 = await User.create( {
//     userName: 'Rikki',
//     email: 'poopoopeepee@gmail.com',
//     phone: 911,
//     password: 113,
//     admin: true
// })

await User.create(
    
) 

const allProducts = [
    { name: 'Red Hoodie', description: 'A warm red piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
    { name: 'Blue Hoodie', description: 'A warm blue piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
    { name: 'Green Hoodie', description: 'A warm green piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
    { name: 'Pink Hoodie', description: 'A warm pink piece for the winter', price: 20.00, url: 'some picture', s: 10, m: 10, l: 10, xl: 10 },
]

for (const i of allProducts) {
    await Product.create(i)
}

