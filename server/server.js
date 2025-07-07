const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./database/conection')
const port = process.env.PORT || 3030
const myapp = express()

const myrouter = require('./routing/myrouter')



myapp.use(cors())
myapp.use(express.json())
myapp.use(myrouter)

myapp.listen(port,()=>{
    console.log(`server is running at: ${port}`);
    })