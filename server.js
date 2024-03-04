const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const fs = require("fs")

app.use(express.static('static'))
app.use(express.static('static/cwiczenia/lekcja1'))
app.use(express.static('static/cwiczenia/lekcja2'))
app.use(express.static('static/cwiczenia/lekcja3'))

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/cwiczenia/index.html"))

})

app.get("/test", (req, res) => {
  const filenames = fs.readdirSync(__dirname + "/static/cwiczenia/lekcja1");
  const filenames2 = fs.readdirSync(__dirname + "/static/cwiczenia/lekcja2");
  const filenames3 = fs.readdirSync(__dirname + "/static/cwiczenia/lekcja3");
  console.log(filenames)
  console.log(filenames2);
  res.json({ filenames, filenames2, filenames3 })
})
