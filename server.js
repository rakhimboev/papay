const dotenv = require('dotenv');
dotenv.config()
const http = require('http');
const mongodb = require('mongodb');

const connectionString = process.env.MONGO_URL

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("Error connecting to MongoDB");
        else {
            console.log("Connecting to MongoDB successfully")
            const app = require('./app.js')
            const server = http.createServer(app)
            let PORT = process.env.PORT || 3003
            server.listen(PORT, () => {
                console.log(`The server is listening successfully on ${PORT}`)
            })
        }
    })