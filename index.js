const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const courseTypes = require('./data/courseTypes.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req,res) => {
    res.send('portable learning server is running.')
})

app.get('/courseTypes', (req, res) =>{
    res.send(courseTypes)
})


app.get('/courseTypes/:id',(req, res)=>{
    const id = req.params.id
    const selectedCourses = courses.find(n => n.identity === id)
    res.send(selectedCourses)
})



app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.listen(port, ()=> {
    console.log(`portable learning server is running on port ${port}`)
})