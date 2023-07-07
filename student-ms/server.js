let express = require('express')
const bodyParser =require('body-parser')
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

let app = express()

// app.use(bodyParser.json());

// getting the array of students
const StudentsGroup = (req, res)=>{
res.json( students );
}

// getting a student id
const studentId = (req, res) => {
    const stdtid = req.params.id
    res.send(`Object ID:${stdtid}`);
};

//creating a new student
const createStudent = (req, res)=>{
    const { name, age, level } = req.body
    console.log(req.body)
    console.log( name, age, level)
    res.json({ name, age, level})
  
}

//deleting a student from the list
const deleteStudents = (req, res)=>{
   students = students.filter(object =>{
    return object.Id !=req.params.id
  });
  res.json(students)
}

const updateStudents = (req, res)=>{
 //update the JSON object with new values from the request body
 students.name = req.body.name;
 students.age = req.body.age;
 students.level = req.body.level;
 
res.send('JSON updated succesfully')
}

//callbacks


//middlewares
app.use(bodyParser.json({extended:true}));
// app.use(bodyParser)

//routes
app.get("/students", StudentsGroup)
app.get("/students/:id", studentId)
app.post('/students/create-student', createStudent)
app.get("/students/delstudent/id", deleteStudents)
app.get("/students/update-student/", updateStudents)


//listening port

app.listen(5000)