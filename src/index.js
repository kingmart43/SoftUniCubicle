const express = require("express");

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');

const app = express();
const PORT = 5555;


expressConfig(app);
handlebarsConfig(app);
// Handlebars Config





// Routes

app.get('/',( req , res ) => {
    res.render('index');
});


app.listen(PORT,()=>
    console.log(`Server is listening on Port:${PORT}...`)
);