const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
const cors = require('cors');


app.use(cors(
  {
    origin: "http://localhost:4200"
  }
));

//cteate function for checking 
app.listen(9990,function check(error)
{
    if(error)
    console.log("error")
    else
    console.log("started")
});

/////// create mongo db connection 
mongoose.connect("mongodb://localhost:27017/cw",{useNewUrlParser: true,  useUnifiedTopology: true ,family: 4},
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});

app.use(express.json());
app.use(routes);