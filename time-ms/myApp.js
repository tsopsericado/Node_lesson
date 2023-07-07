let express = require("express");

let app = express();

//callbacks
let makeDate = (req, res) => {
  let dateM = req.params.date;
  if (isNaN(Date.parse(dateM))) {
    dateM = parseInt(dateM);
  }

  let date = new Date(dateM);

  if (date.toUTCString() == "Invalid date")
    return res.json({ error: "Invalid date" });

  res.json({
    unix: Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getSeconds()
    ),
    utc: date.toUTCString(),
  });
};

//middlewares

//routes
app.get('/api/:date', makeDate);

//listen to a particular port
app.listen(5000);
