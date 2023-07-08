let express = require("express");
const bodyParser = require("body-parser");
const students = [
  {
    Id: "1",
    name: "ricardo",
    age: "25",
    level: "two",
  },
  {
    Id: "2",
    name: "gael",
    age: "20",
    level: "three",
  },
  {
    Id: "3",
    name: "brice",
    age: "30",
    level: "four",
  },
  {
    Id: "4",
    name: "daisy",
    age: "23",
    level: "five",
  },
];

let app = express();

// app.use(bodyParser.json());

// getting the array of students
const StudentsGroup = (req, res) => {
  res.json(students);
};

// getting a student id
const studentId = (req, res) => {
  const stdtid = req.params.id;
  res.send(`Object ID:${stdtid}`);
};

//creating a new student
const createStudent = (req, res) => {
  students = req.body;
  res.json({ message: "JSON object created successfully" });
};

//deleting a student from the list
const deleteStudents = (req, res) => {
  students = students.filter((object) => {
    return object.Id != req.params.id;
  });
  res.json(students || "JSON object deleted succesfully") ||
    res.status(404).json({ error: "JSON object  not found" });
};

//update the JSON object with new values from the request body
const updateStudents = (req, res) => {
  // console.log("BODY", req.body);
  const update = req.body;
  id = req.params.id;

  const results = students.map((student) => {
    if (student.Id === id) {
      return { ...student, ...update };
    }

    return student;
  });

  res.send(results);

};

//Middlewares
app.use(bodyParser.json({ extended: false }));
// app.use(bodyParser)

//routes
app.get("/students", StudentsGroup);
app.get("/students/:id", studentId);
app.post("/students/create-student", createStudent);
app.put("/students/delstudent/:id", deleteStudents);
app.put("/students/update-student/:id", updateStudents);

//listening port
const PORT = 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
