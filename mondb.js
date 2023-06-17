const { MongoClient } = require('mongodb');
const url = "mongodb+srv://srchENG:fourfiveSIX@cluster0.tketpwo.mongodb.net/?retryWrites=true&w=majority";

let dbConnection;
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(url)
            .then((client) => {
                console.log(`connected to database`);
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                console.log(err);
                return cb(err);
            })

    },

    getDb: () =>  dbConnection
}
