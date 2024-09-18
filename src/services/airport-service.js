const CrudService = require('../services/crud-service');
const {AirportRepository} = require('../repository/index');

class AirportService extends CrudService {
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository)
    }
}

module.exports = AirportService;