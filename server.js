const express = require('express')
const bodyParser = require('body-parser')
const registration = require('./routes/Admission')
const cors = require('cors')
const dbConfig = require('./config/config')


var app = express()
app.use(bodyParser.json())




app.use(cors({origin:"http://localhost:3000"}))


dbConfig.authenticate().then(() => {
    console.log("database connected")
}).catch(err => console.log('Error: '+ err))


app.post('/registration', registration )


// dbConfig.sync(
//     {
//     logging: console.log,
//     force: true
// }
// )
// .then(() =>{
//     console.log('connection to database established successfully.');
// })
// .catch(err => {
//     console.log("unable to connect to db",err);
// });




const PORT = process.env.port || 8080


app.listen(PORT , console.log("server is running",PORT))
