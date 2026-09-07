import express from 'express';

const app = express();
const PORT = 3000;

// 1. BASIC JSON RESPONSE

app.get('/', (req, res) => {

    res.json({
        message: "Welcome to the Digital Library",
        status: "Open",
        location: "Main Campus",
        timestamp: new Date()
    });

});


// 2. ARRAY OF OBJECTS

app.get('/books', (req, res) => {

    const bookList = [
        {
            id: 101,
            title: "Clean Code",
            author: "Robert Martin",
            available: true
        },
        {
            id: 102,
            title: "JavaScript Basics",
            author: "John Smith",
            available: true
        },
        {
            id: 103,
            title: "Learning Python",
            author: "Mark Lee",
            available: false
        }
    ];

    res.json(bookList);

});


// 3. DYNAMIC JSON RESPONSE

app.get('/book/:id', (req, res) => {

    const bookId = req.params.id;

    res.json({
        requestedId: bookId,
        title: "Clean Code",
        author: "Robert Martin",
        category: "Programming",
        available: true
    });

});


// 4. START SERVER

app.listen(PORT, () => {

    console.log(`REST GET server running at http://localhost:${PORT}`);

});