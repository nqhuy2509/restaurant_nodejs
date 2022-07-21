const Menu = require('../models/Menu')
const {multiMg2Obj, mg2Obj} = require('../../utils/mongoose')
const imageStorage = require('../../config/upload/image')
const fs = require('fs')
const path = require('path')
const { resolveSoa } = require('dns')

class MenuController{

    // [GET] /menu
    index(req,res,next){
        var search = req.query.search
        if(search){
            Menu.find({
                name : new RegExp(search, 'i')
            })
            .then((menus)=>{
                res.render('menu/menuShow', {
                    menus : multiMg2Obj(menus)
                })
            })
            .catch(next)
        }else{
            Menu.find({})
            .then((menus)=>{
                res.render('menu/menuShow', {
                    menus : multiMg2Obj(menus)
                })
                
            })
            .catch(next)
        }
    }

    // [GET] /menu/create
    create(req,res,next){
        res.render('menu/createMenu')
    }

    // [POST] /menu/upload
    upload(req,res,next){
        var img = fs.readFileSync(req.file.path)
        var encode_img = img.toString('base64')
        var dataReq = req.body
        dataReq.image = {
            data: encode_img,
            contentType: 'image/png'
        }
        var menu = new Menu(dataReq)
        menu.save()
        .then(()=>{
            res.redirect('/menu')
        }).catch(next)
    }

    // [GET] /menu/manage
    manage(req,res,next){
        Menu.find({})
        .then(menus=>{
            res.render('menu/menuManage', {
                menus: multiMg2Obj(menus)
            })
        })
    }


    // [GET] /menu/:id/edit
    edit(req,res,next){
        var id = req.params.id
        Menu.findById(id)
        .then(menu=>{
                res.render('menu/editMenu',{
                    menu: mg2Obj(menu)
                })
            }
        ).catch(next)
    }

    // [GET] /menu/upimg/:id/edit
    editimg(req,res,next){
        var id = req.params.id
        Menu.findById(id)
        .then(menu=>{
            res.render('menu/uploadImgMenu', {
                menu: mg2Obj(menu)
            })
        })
        .catch(next)
    }

    // [PUT] /menu/:id
    update(req,res,next){
        var id = req.params.id
        
        Menu.findByIdAndUpdate(id, req.body)
        .then(()=>{
            res.redirect('/menu/manage')
        })
        .catch(next)
    }

    // [PUT] /menu/upimg/:id
    upimage(req,res,next){
        var id = req.params.id
        var img = fs.readFileSync(req.file.path)
        var encode_img = img.toString('base64')
        var dataReq = req.body
        dataReq.image = {
            data: encode_img,
            contentType: 'image/png'
        }
        Menu.findByIdAndUpdate(id, dataReq)
        .then(()=>{
            res.redirect('/menu/manage')
        })
        .catch(next)
    }

    // [DELETE] /menu/:id
    delete(req,res,next){
        var id = req.params.id
        Menu.findByIdAndDelete(id)
        .then(()=>{
            res.redirect('/menu/manage')
        })
        .catch(next)
    }
}

module.exports = new MenuController