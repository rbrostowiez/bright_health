/**
 * Created by ray on 11/13/16.
 */

const express = require('express');

const Events = express.Router();

Events.get('/', (req, res)=>{
    eventsModel.getEvents();
});

Events.post('/', (req, res)=>{
    //const event = req.body;
    eventsModel.createEvent(eventsModel)
        .then((event)=>{
            res.json(event);
        });
});

Events.get('/:id', (req, res)=>{
    eventsModel.getEventById(req.param.id)
        .then((event)=>{
            res.json(event);
        });
});

Events.put('/:id', (req, res)=>{
    eventsModel.updateEvent(req.body)
        .then((event)=>{
            res.send(event);
        })
});

module.exports = Events;