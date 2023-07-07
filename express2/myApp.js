let express = require("express");
let dotenv = require("dotenv");

let app = express();

let staticDir = __dirname + '/public'


//Callbacks
let serveIndex = (req, res) => {
  let pathToFile = __dirname + "/views/index.html";
  res.sendFile(pathToFile);
};



//middlewares
app.use(express.static(staticDir))
app.use('/css', express.static(staticDir + 'css'))
app.use("/js", express.static(staticDir + "js"))
// app.use("/vendor/", express.static(staticDir + "js/"));
// app.use("/img", express.static(staticDir + "images"));






//routes
app.get("/", serveIndex);

// listen on a particular port

app.listen(3000);
