const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mock = require("./mock/data.json")

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/api/hero', (req, res) => {
  res.send(mock)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})