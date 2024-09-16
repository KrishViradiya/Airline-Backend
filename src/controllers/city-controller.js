
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
        res.status(500).json({
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
        const response = await cityService.deleletCity(req.params.id);
        res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city"
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
        const response = await cityService.deleletCity(req.params.id,req.body);
        res.status(200).json({
            data:response,
            success:true,
            message:"Successfully Updated a city"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"city updation failed",
            err:error
        })
    }
}

// Get : /city/:id
const getCity = async(req,res) => {
    try {
        const response = await cityService.deleletCity(req.params.id);
        res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched a city"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Failed fetching city",
            err:error
        })
    }
}


module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity
}