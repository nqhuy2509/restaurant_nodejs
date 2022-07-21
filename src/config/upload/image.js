const multer = require('multer')


var storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, './src/public/images/uploads')
    },
    filename: (req,file,cb) =>{
        cb(null, file.fieldname + '-' +Date.now())
    }
})

module.exports = multer({storage: storage})