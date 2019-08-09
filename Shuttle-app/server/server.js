const mongoose = require('mongoose');
const experess = require('express');
const uri = "mongodb+srv://dumalk:dumalk@cluster0-yx3nh.mongodb.net/shuttle_core?retryWrites=true&w=majority";
const assert = require('assert');
const bodyParser = require('body-parser');
const RegisterAPI  = require("./routes/api/RegisterAPI");



const connectDb = () => {
    return mongoose.connect(uri, { useNewUrlParser: true });
};

const app = experess();
// TODO: need to move the port and connection uri to env variables.
const port = 19000;

connectDb().then(async () => {
    app.listen(port, () => console.log(`Server started port on ${port}`)) 
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/register', RegisterAPI);
