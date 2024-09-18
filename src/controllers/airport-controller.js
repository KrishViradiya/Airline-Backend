const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"New Airport added successfully",
            err:{}
        })
    } catch (error) {
      return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:"Cannot create a new airport"
        })
    }
}

module.exports = {
    create
}