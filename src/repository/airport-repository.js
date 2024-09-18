const {CrudRepository} = require('../repository/crud-repositroy');

class AirportRepository extends CrudRepository {
    constructor(model){
        super(model)
    }


}

module.exports = AirportRepository