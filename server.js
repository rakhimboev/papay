const dotenv = require('dotenv');
dotenv.config()
const http = require('http');
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URL

mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, goose) => {
        if (err) console.log("Error connecting to MongoDB");
        else {
            console.log("Connecting to MongoDB successfully")
            console.log(goose)
            const app = require('./app.js')
            const server = http.createServer(app)
            let PORT = process.env.PORT || 3003
            server.listen(PORT, () => {
                console.log(`The server is listening successfully on ${PORT}, http://localhost:${PORT}`)
            })
        }
    })