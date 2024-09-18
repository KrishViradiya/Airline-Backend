const CrudRepository = require('../repository/crud-repositroy');
const {Airport} = require("../models/index")

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }


}

module.exports = AirportRepository