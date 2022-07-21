const express = require('express')
const empController = require('./controllers/employeeController')
const exphbs = require('express-handlebars')
const app = express()

//Middlewear for handleswar
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Middle wear for Form
app.use(express.urlencoded({extended:true}))

app.use('/',empController)


const PORT = 4500;

app.listen(PORT,()=>console.log(`server is running at ${PORT}`))