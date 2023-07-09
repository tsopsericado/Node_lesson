let express = require("express");
const bodyparser = require("body-parser");
const books = [
  {
    id: 1,
    edition: "one",
    name: "physics",
    author: "paul",
  },
  {
    id: 2,
    edition: "two",
    name: "economics",
    author: "Chelsea",
  },
  {
    id: 3,
    edition: "three",
    name: "bio",
    author: "Gael",
  },
  {
    id: 4,
    edition: "four",
    name: "Math",
    author: "Rash",
  }
];


let app = express();

//callbacks

//getting all json abject
const bookList = (req, res)=>{
   res.json(books)
};

//getting the specific JSON object by ID
const bookId =(req, res)=>{
    const id = parseInt(req.params.id);
    const obj = books.find((item)=>item.id ===id);
   
};

//creating a JSON object 
const createBook = (req, res)=>{
 const newObj = req.body;

   newObj.id = books.length + 1;
  
   books.push(newObj);

   res.status(201).json(newObj);
}

const updatebook =(req, res) => {
    const updates = req.body;
    id = req.params.id;
    
    const results = books.map((book) =>{
        if (book.id === id){
            return {...book, ...updates};
        }
        return book;
    });
    res.send(results)
}

const deleteBook =(req, res)=>{
   
}




//middlewares
app.use(bodyparser.json({extende: false}));


//routes
app.get("/books", bookList);
app.get("/books/:id", bookId);
app.post("/books/creat-book", createBook);
app.put("/books/updatebooks", updatebook);
app.delete("/books/deletbook/:id", deleteBook)



//listening port
const PORT =4000;
app.listen(PORT, () =>console.log(`listening on port ${PORT}`));