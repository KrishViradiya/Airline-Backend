const { response } = require("express");

class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response
        } catch (error) {
            console.log("Something went wrong in the crud service");
        }
    }

    async delete(id){
        try {
            const response = await this.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
        }
    }

    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
        }
    }

    async getAll(){
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
        }
    }

    async update(id,data){
        try {
            const response = await this.repository.update(id,data)
        } catch (error) {
            console.log("Something went wrong in the crud service");
        }
    }
}

module.exports = CrudService;