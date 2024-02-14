import express from 'express'
import {Person} from './Person.js'

const app = express()
const router = express.Router()
const port = +process.env.Port || 4000

app.use(
    express.json(),
    router
)
router.get('^/$|/class', (req, res) =>{
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})
router.get('/person1', (req, res) =>{
    let person1 = new Person()
    person1.FirstName = 'Tashreeq'
    person1.LastName = 'Lee'
    person1.Age = 21
    person1.display()
    res.end('Please check the console')
})
router.get('/person2', (req, res) =>{
    let person2 = new Person()
    person2.FirstName = 'Ntokozo'
    person2.LastName = 'Sithebe'
    person2.Age = 22
    person2.display()
    res.end('Please check the console')

})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})