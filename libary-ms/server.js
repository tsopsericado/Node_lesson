let express = require("express");
const bodyparser = require("body-parser")
const books = [
    {
        edition: "1",
        name: "physics",
        author: "paul", 
    }
]


let app = express();


//callbacks



//middlewares
app.use(bodyparser.json({extende: false}));

//routes


//listening port
let PORT =4000
app.listen(PORT, () =>console.log(`listening on port ${PORT}`));