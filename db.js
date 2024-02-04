const { MongoClient } = require('mongodb')

let dbConnection
let uri = "mongodb+srv://ERIC_EX:d9iH7cWyFTH4yIDt@cluster0.vc8fuyy.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}
