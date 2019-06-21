const path=require('path');

const express = require('express');
const bodyParser = require('body-parser');
const handlebar = require('express-handlebars');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//express app
const app = express();

//templating engine

//pug
//app.set('view engine', 'pug');
//app.set('views', 'views');

//handlebars
// app.engine('hbs', handlebar({
//     layoutsDir: path.join(__dirname, 'views' , 'layouts'), 
//     defaultLayout: 'main-layout.hbs',   
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

//ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//express utility - request body parsing and static file serving
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use('/admin', adminRoute.router);
app.use(shopRoute.router);

app.use((req,res,next)=>{
    console.log("404 Error Page Not Found");
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {docTitle: '404 Not Found'/*, layout: false*/});
})

//server
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
