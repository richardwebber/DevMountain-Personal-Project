import { Product, User, Cart, Item } from './model.js';


const user1 = await User.create( {
    userName: 'Rikki',
    email: 'poopoopeepee@gmail.com',
    phone: 911,
    password: 113,
    admin: true
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



// const seedDatabase = async () => {
//     const db = await connectToDB('postgres:///store');

//     try {
//         // Sync the models with the database
//         await db.sync({ force: true });

//         // Create sample products
//         const product1 = await Product.create({
//             name: 'Product 1',
//             price: 19.99,
//             description: 'Sample product description 1',
//         });

//         const product2 = await Product.create({
//             name: 'Product 2',
//             price: 29.99,
//             description: 'Sample product description 2',
//         });

//         // Create a sample user
//         const user = await User.create({
//             username: 'sampleUser',
//             password: 'password123',
//         });

//         // Create a cart for the user
//         const cart = await Cart.create();

//         // Add products to the cart
//         await cart.addProduct(product1, { through: { quantity: 2 } });
//         await cart.addProduct(product2, { through: { quantity: 1 } });

//         // Associate the cart with the user
//         await user.setCart(cart);

//         // Fetch the user with the associated cart and products
//         const userWithCart = await User.findByPk(user.id, {
//             include: {
//                 model: Cart,
//                 include: Product,
//                 through: { model: Item },
//             },
//         });

//         console.log('User with Cart:', userWithCart.toJSON());
//     } catch (error) {
//         console.error('Error seeding database:', error);
//     } finally {
//         // Close the Sequelize connection
//         await db.close();
//     }
// };

// seedDatabase();