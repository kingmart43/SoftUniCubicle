const express = require("express");

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController')
const app = express();
const PORT = 5555;


expressConfig(app);
handlebarsConfig(app);


app.use(homeController);
app.use('/cubes', cubeController);



app.listen(PORT,()=>
    console.log(`Server is listening on Port:${PORT}...`)
);