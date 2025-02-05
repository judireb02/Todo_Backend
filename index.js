const app = require('./app')

const db = require('./config/db')

// get the port from env 
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Mixing it up on port http://localhost:${PORT}`))
app.get('/', (req, res) => res.send('Hey'))
