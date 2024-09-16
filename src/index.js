const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser');

const apiRoutes = require("./routes/index");

const setupAndStartServer = async() => {
    //creating app object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen( PORT,() => {
        
        console.log(`Server is started and listening on port ${PORT}`);
        
    })

    app.use('/api',apiRoutes)
    


}

setupAndStartServer();