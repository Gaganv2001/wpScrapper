const express = require('express')
const app = express()
const port = 5000
const cors=require("cors")
const mongoDB=require("./db")

app.use(express.json())

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//All the required API's
app.use('/api/getinfo', require("./routes/getInfo"))
app.use('/api/display', require("./routes/display"))
app.use('/api/updatefav', require("./routes/updatefav"))
app.use('/api/deletedomain', require("./routes/deletedomain"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})