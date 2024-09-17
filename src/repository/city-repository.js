const { where, Op } = require("sequelize");
const {City} = require("../models/index");

class CityRepository {
    async createCity({name}){
        try {
           const city =  await City.create({name});
           return city;
            
        } catch (error) {
            console.log("Error while creating city")
            throw {error}
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Error while deleting city")
            throw {error}
        }
    }

    async updateCity(cityId,data){
        try {
            // The below approach also works but it wont return an updated object 
            // if we are using Pg then returning : true can be used, else not
            // const city = await City.update(data, {
            //     where:{
            //         id:cityId
            //     }
            // })

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Error while updating city in city repository")
            throw {error}
        }
    }

    // async getCity(cityId){
    //     try {
        
    //         const city = await City.findByPk(cityId)
    //         return city;
    //     } catch (error) {
    //         console.log("Error while fetching particular city");
    //         throw error;
    //     }
    // }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            if (!city) {
                throw new Error(`City with id ${cityId} not found`);
            }
            return city;
        } catch (error) {
            console.log("Error while fetching particular city:", error.message);
            throw error;
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Error while fetching all cities in repository");
            throw {error}
        }
    }
}

module.exports = CityRepository;