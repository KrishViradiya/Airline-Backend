const {Airplane} = require('../models/index');

class AirplaneRepository {

    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Error while fetching plane in repository layer");
            throw {error}
        }
    }
}

module.exports = AirplaneRepository;