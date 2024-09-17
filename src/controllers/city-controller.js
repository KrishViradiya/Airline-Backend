
const {CityService} = require('../services/index');

const cityService = new CityService();

const createCity = async(req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully Created a city",
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"City creation failed",
            err:error
        })
    }
}

// DELETE --> /city/:id
const deleteCity = async(req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        })
    } catch (error) {
        console.log(error)
         return res.status(500).json({
            data:{},
            success:false,
            message:"City deletion failed",
            err:error
        })
    }
}

// Update city-> /city/:id
const updateCity = async(req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
         return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully Updated a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"city updation failed",
            err:error
        })
    }
}

// Get : /city/:id
const getCity = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}


const getAllCities = async(req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        res.status(200).json({
            data:cities,
            success:true,
            message:"All the cities fetched successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch all the cities',
            err: error
        });
    }
}


module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity,
    getAllCities
}