const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
class ProductService {

    constructor() {
        this.products = []
        this.generate()
    }
    generate() {
        const limit = 50
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.url()
            })

        }
    }
    create(body) {
        this.products.push({
            id:faker.string.uuid(),
            ...body
        })
        return this.products[this.products.length-1]
    }
    find() {
        return this.products
    }
    findOne(id) {
        return this.products.find(x=>x.id==id)
    }
    delete(id) {
        const index =this.products.findIndex(x=>x.id==id)
        if (index>-1) {
            this.products.splice(index,1)
            return 'deleted!'
        }
        else{
            throw boom.notFound('Not found')
        }

    }
    update(id, body){
        const index =this.products.findIndex(x=>x.id==id)
        if (index>-1) {
            
            this.products[index] = {...this.products[index], ...body}
            return 'updated!'
        }
        else{
            throw boom.notFound('Not found')
        }
    }
}
module.exports = ProductService
