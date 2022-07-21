const express = require('express')
const app = express()
const path = require('path')
const route = require('./routes')
const {engine} = require('express-handlebars')
const db = require('./config/db')
var methodOverride = require('method-override')
var formatDay = require('./helpers/formatDay')
const port = 3000

// Connect databse
db.connect()


// Config body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(methodOverride('_method'))

// Set static file
app.use(express.static(path.join(__dirname,'public')))

// Set template engine
app.engine('hbs',engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b)=> a+b,
        check: function(a){
            if(a !=='soldout'){
                return `<option value="{{this._id}}">{{this.name}}</option>`
            }
        },
        convert: (a)=>{
            var base = Buffer.from(a)
            return base.toString('base64')
        },
        formatDay: (a) =>{
            return formatDay(a)
        }
        
    }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './resourses/views'))

route(app)

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})