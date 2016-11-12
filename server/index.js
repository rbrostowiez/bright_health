/**
 * Created by ray on 11/12/16.
 */

import express from 'express';

import routers from './routers';

const app = express();

app.use('/', routers);


// TODO: Start server

