/**
 * Created by ray on 11/12/16.
 */

const express = require('express');
const config = require('config');
const mysql = require('promise-mysql');
const bodyParser = require('body-parser');


const routers = require('./routers');
const EventModel = require('./models/event-model');

const app = express();

// Initializing DB connection then starting the app
mysql.createConnection(config.db)
    .then((dbCon)=>{
        // Mounting middleware and routes
        app.use(bodyParser.json());

        app.use((req, res, next)=>{
            req.eventModel = new EventModel(dbCon);
            next();
        });

        app.use('/', routers);

        app.listen(config.server.port, (server)=>{
            console.log(`Listening on ${config.server.port}`);
        });
    })
    .catch(console.error);

