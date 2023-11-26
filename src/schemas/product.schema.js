const joi = require('joi');

const id = joi.string().uuid()
const name = joi.string().min(3).max(45)
const price = joi.number().integer().positive().min(5000)

const createProductScheme = joi.object({
    name: name.required(),
    price: price.required()
})
const updateProductScheme = joi.object({
    name,
    price
})
const getProductScheme = joi.object({
    id: id.required()
})
module.exports = { createProductScheme, updateProductScheme, getProductScheme }
