/**
 * Created by ray on 11/13/16.
 */

const SELECT_QUERY = 'SELECT * FROM events';
const INSERT_QUERY = 'INSERT eventTitle, startDate, endDate, description, featuredFlag INTO events VALUES (?, ?, ?, ?, ?)';


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
        const {eventTitle, startDate, endDate, description, featuredFlag, categories} = event;
        return this.dbCon.query(INSERT_QUERY, [eventTitle, startDate, endDate, description, featuredFlag])
            .then((results)=>{
                //TODO: Insert category mappings

                return results;
            })
            .catch((error)=>{
                console.error(error);
                return {error: "Database error!"};
            })
    }
}

module.exports = EventModel;