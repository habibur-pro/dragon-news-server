const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
const categories = require('./data/categories.json')

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
    res.send('wellcome dragon news server')
})



app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})