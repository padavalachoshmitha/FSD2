import express from 'express';

const app = express();
const PORT = 3000;


// 1. BUILT-IN MIDDLEWARE

// Allows Express to read JSON data from POST and PUT requests
app.use(express.json());


// 2. CUSTOM LOGGING MIDDLEWARE

// Runs for every request
app.use((req, res, next) => {

    const time = new Date().toLocaleString();

    console.log(
        `[${time}] ${req.method} ${req.url}`
    );

    next();
});


// 3. CUSTOM SECURITY MIDDLEWARE

// Checks whether the request contains a User-Agent
app.use((req, res, next) => {

    const userAgent = req.get('User-Agent');

    if (!userAgent) {

        return res.status(400).json({
            error: "User-Agent information is missing"
        });

    }

    next();
});


// 4. MOCK DATABASE

let students = [

    {
        id: 1,
        name: "Rani",
        course: "AI&DS",
        marks: 90
    },

    {
        id: 2,
        name: "Anjali",
        course: "CSE",
        marks: 85
    }

];


// 5. GET - READ ALL STUDENTS

app.get('/students', (req, res) => {

    res.json(students);

});


// 6. POST - ADD NEW STUDENT

app.post('/students', (req, res) => {

    const newStudent = {

        id: students.length + 1,

        name: req.body.name,

        course: req.body.course,

        marks: req.body.marks

    };

    students.push(newStudent);

    res.status(201).json({

        message: "Student added successfully",

        student: newStudent

    });

});


// 7. PUT - UPDATE STUDENT

app.put('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        s => s.id === id
    );

    if (student) {

        student.name = req.body.name;

        student.course = req.body.course;

        student.marks = req.body.marks;

        res.json({

            message: "Student updated successfully",

            student: student

        });

    } else {

        res.status(404).json({

            error: "Student not found"

        });

    }

});


// 8. DELETE - DELETE STUDENT

app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const studentExists = students.some(
        s => s.id === id
    );

    if (!studentExists) {

        return res.status(404).json({

            error: "Student not found"

        });

    }

    students = students.filter(
        s => s.id !== id
    );

    res.json({

        message: `Student ${id} deleted successfully`,

        remainingStudents: students

    });

});


// 9. START SERVER

app.listen(PORT, () => {

    console.log(
        `Student API Server running at http://localhost:${PORT}/students`
    );

    console.log("Listening for requests...");

});