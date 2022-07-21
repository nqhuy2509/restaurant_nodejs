const siteRouter = require('./site')
const menuRouter = require('./menu')
const orderRouter = require('./order')

function route(app){
    app.use('/', siteRouter)
    app.use('/menu', menuRouter)
    app.use('/order', orderRouter)
}

module.exports = route