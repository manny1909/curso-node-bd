const express = require('express');
const fakerAntiguo = require('faker');
const { faker } = require('@faker-js/faker');

const routeApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/errorHandler.handler');
const {models} = require('./libs/sequelize'); 
const ormErrorHandler = require('./middlewares/ormError.handler');

const app = express()

//Authentication vs Authorization
/**
 * Authentication: quien eres y si tus credenciales son correctas te deja ingresar
 * Authorization: verifica los permisos que tienes (gestión de permisos)
 * Responsabilidades diferentes
 * Jwt stateless = todo por medio del token
 */
//MIDDLEWARES
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('<h1>hola mundo</h1>')
}
)
app.get('/paquito', async (req, res) => {
    const { limit, offset } = req.query
    const users2 = await models.User.findAll()
    if (limit && offset) {
        res.json({
            limit,
            offset,
            users: users2 ? users2 : undefined
        })
    } else {
        res.send('no hay parámetros')
    }
})
routeApi(app)

//ERROR MIDDLEWARES
app.use(logErrors)
app.use(ormErrorHandler)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('listening on port 3000') 
})
