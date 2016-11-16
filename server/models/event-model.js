/**
 * Created by ray on 11/13/16.
 */

const SELECT_QUERY = 'SELECT * FROM events';


class EventModel{

    constructor(dbCon){
        this.dbCon = dbCon;
    }

    getEventById(id){
        return this.dbCon.query(`${SELECT_QUERY} WHERE id = ?`, [id])
            .catch((error)=>{
                console.error(error);
                return {error: "Database error!"};
            })
    }

    getEvents(options){
        return this.dbCon.query(`${SELECT_QUERY} ORDER BY startDate DESC LIMIT ?, ?`, [10, 0])
            .catch((error)=>{
                console.error(error);
                return {error: "Database error!"};
            })
    }

    updateEvent(event){
        // TODO: Update Event
    }

    createEvent(event){
        // TODO: create event
    }
}

module.exports = EventModel;