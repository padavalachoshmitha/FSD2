import express from 'express';

const app = express();
const PORT = 3001;

// 1. Route Parameter
// Example: http://localhost:3001/student/101

app.get('/student/:id', (req, res) => {

    const studentId = req.params.id;

    res.send(`
        <h1>Student Details</h1>
        <p>Student ID: <strong>${studentId}</strong></p>
    `);
});


// 2. Multiple Route Parameters
// Example: http://localhost:3001/college/SVECW/CSE

app.get('/college/:name/:branch', (req, res) => {

    const { name, branch } = req.params;

    res.send(`
        <h1>College Details</h1>
        <p>College: <strong>${name}</strong></p>
        <p>Branch: <strong>${branch}</strong></p>
    `);
});


// 3. Query Parameters
// Example: http://localhost:3001/students?branch=CSE&year=3

app.get('/students', (req, res) => {

    const branch = req.query.branch;
    const year = req.query.year;

    res.json({
        message: "Student Search Results",
        selectedBranch: branch || "All",
        selectedYear: year || "All"
    });
});


// Start Server
app.listen(PORT, () => {

    console.log(`Dynamic server running at http://localhost:${PORT}/students`);
    console.log('Press Ctrl+C to stop the server');

});