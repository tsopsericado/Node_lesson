let express = require('express')
let app = express();


app.use(express.static('public'));


app.get('/', )



//callbacks
 let parseHeader = (req, res) => {
   const ipaddress = req.ip
   const language = req.headers['accept-language']
   const software = req.headers['user-agent']



    res.json({
      ipaddress,
      language,
      software
    })
 }


//middlewares

//routes
app.get('/api/',  parseHeader);

//listen to a particular port

app.listen(6000);