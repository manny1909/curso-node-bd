const productsRouter = require("./products.route");
const router = require('express').Router();
function routeApi(app) {
    app.use('/api/v1/', router)
    router.use('/products', productsRouter)
}
module.exports = routeApi
