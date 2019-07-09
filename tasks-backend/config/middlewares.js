const boddyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(boddyParser.json())
    app.use(cors({
        origin: '*'
    }))
}