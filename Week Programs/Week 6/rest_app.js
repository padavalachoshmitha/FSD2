import express from 'express';

const app = express();
const PORT = 3000;

// Middleware
// Allows Express to read JSON data from request body
app.use(express.json());


// MOCK DATABASE

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000
    },
    {
        id: 2,
        name: "Headphones",
        price: 2500
    }
];


// --------------------------------------------------
// 1. GET - Read all products
// --------------------------------------------------

app.get('/products', (req, res) => {

    res.json(products);

});


// --------------------------------------------------
// 2. POST - Create a new product
// --------------------------------------------------

app.post('/products', (req, res) => {

    const newProduct = {

        id: req.body.id != null
            ? req.body.id
            : products.length + 1,

        name: req.body.name,

        price: req.body.price

    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });

});


// --------------------------------------------------
// 3. PUT - Update an existing product
// --------------------------------------------------

app.put('/products/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (product) {

        product.name = req.body.name;
        product.price = req.body.price;

        res.json({
            message: "Product updated successfully",
            product: product
        });

    } else {

        res.status(404).json({
            error: "Product not found"
        });

    }

});


// --------------------------------------------------
// 4. DELETE - Remove a product
// --------------------------------------------------

app.delete('/products/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const productExists = products.some(p => p.id === id);

    if (!productExists) {

        return res.status(404).json({
            error: "Product not found"
        });

    }

    products = products.filter(p => p.id !== id);

    res.json({
        message: `Product ${id} deleted successfully`,
        remainingProducts: products
    });

});


// --------------------------------------------------
// 5. START SERVER
// --------------------------------------------------

app.listen(PORT, () => {

    console.log(`Product REST API running at http://localhost:${PORT}/products`);
    console.log("Listening for requests...");

});