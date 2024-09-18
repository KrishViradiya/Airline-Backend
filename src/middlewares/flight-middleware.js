
const {ClientErrorCodes} = require('../utils/error-codes')
const validateCreateFlight = async (req,res,next) => {
    try {
        if(
            !req.body.flightNumber ||
            !req.body.airplaneId || 
            !req.body.departureAirportId || 
            !req.body.arrivalAirportId || 
            !req.body.arrivalTime || 
            !req.body.departureTime ||
            !req.body.price 
        ){
            return res.status(ClientErrorCodes.BAD_REQUEST).json({
                data:{},
                success:false,
                message:'Invalid request body for create flight',
                err:"Missing mandatory properties to create a flight"
            })
        }

        next();
    } catch (error) {
        console.log("Error in flight middleware")
        throw {error}
    }
}

module.exports = {
    validateCreateFlight
}