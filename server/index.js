const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const db = require('./configDB')
const route = require('./routes')
const port = process.env.PORT || 5000
//connect with database
db.connect()

app.use(morgan('combined'))
app.use(express.json())

route(app)


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})