/**
 * Created by ray on 11/12/16.
 */

const express = require('express');
const config = require('config');
const mysql = require('promise-mysql');



const routers = require('./routers');
const EventModel = require('./models/event-model');


const app = express();


app.use('/', routers);

// Initializing DB connection then starting the app
mysql.createConnection(config.db)
    .then((dbCon)=>{
        // Mounting models
        app.use((req, res)=>{
            req.eventsModel = new EventModel(dbCon);
        });

        app.listen(config.server.port, (server)=>{
            console.log(`Listening on ${config.server.port}`);
        });
    })
    .catch(console.error);

