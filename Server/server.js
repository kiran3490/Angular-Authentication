const express = require('express')
const bodyparser = require('body-parser')

const PORT = 3000

const app = express()

app.use(bodyparser.json())

app.get('/', (req, res)=>{
    res.send('Hello From Express Server')
})

app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT);
})