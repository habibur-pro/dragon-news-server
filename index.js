const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/categories', (req, res) => {
    res.send(categories)
})

// get all news 
app.get('/news', (req, res) => {
    res.send(news)
})

// get one news by id 
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

// get news by category 
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === '0') {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }

})

app.get('/', (req, res) => {
    res.send('wellcome dragon news server')
})



app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})