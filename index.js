require('dotenv').config({ path: __dirname + '/config/.env' })
require('./config/db')
const express = require('express')
const cookieParser = require('cookie-parser')
const taskRoute = require('./routers/task')
const userRoute = require('./routers/user')
const stageRoute = require('./routers/stage')

const app = express()
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use('/task', taskRoute)
app.use('/user', userRoute)
app.use('/stage', stageRoute)

const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log("Task Running on =>  http://localhost:", process.env.PORT);
})