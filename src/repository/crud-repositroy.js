class CrudRepository {

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error}
        }
    }

    async delete(modelId){
        try {
            const response = await this.model.destroy({
                where:{
                    id:modelId
                }
            })
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error}
        }
    }

    async get(modelId) {
        try {
            const response = await this.model.findByPk(modelId);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error}
        }
    }

    async update(modelId,data) {
        try {
            const response = await this.model.findOne({
                where:{
                    id:modelId
                }
            })
            return response
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error}
        }
    }

    async getAll(data) {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error}
        }
    }
}

module.exports = CrudRepository;