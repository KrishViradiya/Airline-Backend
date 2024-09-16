const city = require("../models/city");
const {CityRepository} = require("../repository/index.js")

 class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }


    async createCity(data){
        try {
            const city = await this.CityRepository.createCity(data)   
            return city;         
        } catch (error) {
            console.log("Something went wrong in the service layer")
        }
    }

    async deleletCity(cityId){
        try {
            const response = await this.CityRepository.deleletCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer")
        }

    }

    async updateCity(cityId,data){
        try {
            const city = await this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer")
        }
    }

    async getCity(cityID){
        try {
            const city = await this.CityRepository.getCity(cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer")
        }
    }

 }

 module.exports = CityService;