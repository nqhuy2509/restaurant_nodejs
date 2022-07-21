const Menu = require('../models/Menu')
const Order = require('../models/Order')
const {mg2Obj,multiMg2Obj} = require('../../utils/mongoose')

class OrderController {
    // [GET] /order
    index(req,res,next){
        Menu.find({
            status : {$not: /soldout/}
        })
        .then(menus=>{
            res.render('order/createOrder',{
                menus: multiMg2Obj(menus)
            })
        })
    }

    // [GET] /order:id
    orderId(req,res,next){
        Menu.findById(req.params.id)
        .then((menu)=>{
            res.render('order/createOrderById',{
                menu: mg2Obj(menu)
            })
        })
    }

    // [POST] /order/upload
    upload(req,res,next){
        var data = req.body
        console.log(data)
        data.status = 'new'
        var order = new Order(data)
        order.save()
        .then(()=>{
            res.render('order/orderSuccess')
        })
        .catch(next)

    }

    // [GET] /order/manage
    manage(req,res,next){
        Order.find({})
        .then(orders=>{
            res.render('order/orderManage', {
                orders: multiMg2Obj(orders)
            })
        })
    }

    // [GET] /order/:id
    detail(req,res,next){
        Order.findById(req.params.id)
        .then(order=>{
            res.render('order/orderDetail', {
                order: mg2Obj(order)
            })
        })
    }
}

module.exports = new OrderController