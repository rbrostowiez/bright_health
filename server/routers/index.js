/**
 * Created by ray on 11/12/16.
 */

const express = require('express');

const events = require('./events');

const Index = express.Router();

Index.use('/events', events);

module.exports = Index;