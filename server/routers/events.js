/**
 * Created by ray on 11/13/16.
 */

const express = require('express');

const Events = express.Router();

Events.get('/', (req, res)=>{
    req.eventModel.getEvents()
        .then((events)=>{
            res.json(events);
        });
});

Events.post('/', (req, res)=>{
    //const event = req.body;
    req.eventModel.createEvent(eventsModel)
        .then((event)=>{
            res.json(event);
        });
});

Events.get('/:id', (req, res)=>{
    req.eventModel.getEventById(req.param.id)
        .then((event)=>{
            res.json(event);
        });
});

Events.put('/:id', (req, res)=>{
    req.eventModel.updateEvent(req.body)
        .then((event)=>{
            res.json(event);
        })
});

module.exports = Events;