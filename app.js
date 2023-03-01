const express = require('express')
const app = express()

app.set('views', 'public')
app.set('viewport', 'ejs')
app.use("/modules", express.static(__dirname + "/node_modules"))
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(8080)
console.log("App available on port 8080!")