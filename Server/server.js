const express = require('express')
const bodyparser = require('body-parser')

const PORT = 3000

const api = require('./routes/api')
const app = express()

app.use(bodyparser.json())

app.use('/api', api)
app.get('/', (req, res)=>{
    res.send('Hello From Express Server')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})