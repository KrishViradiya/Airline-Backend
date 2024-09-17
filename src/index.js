const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser');

const apiRoutes = require("./routes/index");

const db = require('./models/index')
// const {Airport,City} = require('./models/index');

const setupAndStartServer = async() => {
    //creating app object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen( PORT, async () => {
        
        console.log(`Server is started and listening on port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});   // we do not have to always run this command , once it is okay
        }
        // const city = await City.findOne({
        //     where:{
        //        id:4
        //     }
        // })

        // once i have fetched the city with its id 9 and i have sycn the database then i can have an access to all such methods like getAirports
         
        // const airports = await city.getAirports();
    

        
    })

    app.use('/api',apiRoutes)
    


}

setupAndStartServer();