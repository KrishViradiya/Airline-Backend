const ClientErrors = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORIZED: 401,
    NOT_fOUND:404
})

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED:501
})

const successCodes = Object.freeze({
    OK:200,
    CREATED:201
})

module.exports = {
    ClientErrors,
    ServerErrors,
    successCodes
}