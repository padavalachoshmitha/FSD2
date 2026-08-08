import express from 'express';

const app = express();
const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Student Management Server');
});

// Student Route
app.get('/student', (req, res) => {
    res.send(`
        <h1>Student Information</h1>
        <p>Name: Rani</p>
        <p>Course: AI & Data Science</p>
    `);
});

// Student JSON Route
app.get('/api/student', (req, res) => {
    res.json({
        name: "Rani",
        course: "AI & Data Science",
        year: 3
    });
});

// Marks JSON Route
app.get('/api/marks', (req, res) => {
    res.json({
        programming: 90,
        database: 85,
        webDevelopment: 92
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/student`);
    console.log('Press Ctrl+C to stop the server');
});