const express = require('express')
const app = express()
const cors=require("cors")
const port=5000
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

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${port}`)
})