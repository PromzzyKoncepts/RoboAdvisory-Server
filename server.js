const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const connectToMongoDB = require('./db/connect')

const app = express()
const PORT = process.env.PORT || 5000
const mongoURL = process.env.MONGODB_URL || 'please enter your mongo db connection string in the created .env file'

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, async ()=>{
    console.log(`Server running on port ${PORT}`)
    await connectToMongoDB(mongoURL)
})