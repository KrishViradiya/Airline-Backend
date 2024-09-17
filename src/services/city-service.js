// const city = require("../models/city");
const { CityRepository } = require("../repository/index.js");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service layer");
    }
  }

//   async getCity(cityId) {
//     try {
      
//       const city = await this.CityRepository.getCity(cityId);
//       return city;
//     } catch (error) {
//       console.log("Something went wrong in the service layer");
//     }
//   }

async getCity(cityId) {
    try {
        const city = await this.CityRepository.getCity(cityId);
        return city;
    } catch (error) {
        if (error.message.includes('not found')) {
            console.log(error.message);
            return null;
        }
        console.log("Something went wrong in the service layer:", error.message);
        throw error;
    }
}

async getAllCities(){
  try {
    const citites = await this.CityRepository.getAllCities();
    return citites;
  } catch (error) {
    console.log("Something went Wrong in Service Layer");
  }
}
}

module.exports = CityService;
