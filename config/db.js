const mangoose = require('mongoose')
// get 
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todo'
mangoose.connect(MONGO_URI)
    .then(() => console.log('Connected to the database'))
    .catch((err) => {
        console.log('Error connecting to the database')
        console.error(err)
    })

