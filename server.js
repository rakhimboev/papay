const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://umar:umar1999@cluster0.7v4wjlt.mongodb.net/reja"

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
            module.exports = client
            const app = require('./app.js')
            const server = http.createServer(app)
            let PORT = 3003
            server.listen(PORT, () => {
                console.log(`The server is listening successfully on ${PORT}`)
            })
        }
    })