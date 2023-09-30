const express = require("express");
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 5555;


// Express config
app.use(express.static(path.resolve(__dirname, 'public')));


// Handlebars Config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',


}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');




// Routes

app.get('/',( req , res ) => {
    res.render('index');
});


app.listen(PORT,()=>
    console.log(`Server is listening on Port:${PORT}...`)
);