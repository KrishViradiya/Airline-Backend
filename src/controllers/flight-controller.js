const {FlightService} = require('../services/index.js');

const flightService = new FlightService();

const createFlight = async(req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success:true,
            message:"Successfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to create flight",
            err:error
        })
    }
}

const getAllFlights = async(req,res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:flights,
            success:true,
            message:"All flights fetched successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to fetch all the flights",
            err:error
        })
    }
}

module.exports = {
    createFlight,
    getAllFlights
}