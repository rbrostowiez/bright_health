/**
 * Created by ray on 11/13/16.
 */

class EventModel{

    constructor(dbCon){
        this.dbCon = dbCon;
    }

    getEventById(id){
        // TODO: Retrieve an event
    }

    getEvents(options){
        // TODO: get Events
    }

    updateEvent(event){
        // TODO: Update Event
    }

    createEvent(event){
        // TODO: create event
    }
}

module.exports = EventModel;