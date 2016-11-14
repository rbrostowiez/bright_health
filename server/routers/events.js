/**
 * Created by ray on 11/13/16.
 */

import express from 'express';
import config from 'config';

import EventModel from '../models/event-model';

const eventsModel = new EventModel();
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

Events.push('/:id', (req, res)=>{
    eventsModel.updateEvent(req.body)
        .then((event)=>{
            res.send(event);
        })
});

export default Events;