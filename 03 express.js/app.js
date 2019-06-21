const path=require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname), "app.js");

app.use('/admin', adminRoute.router);
app.use(shopRoute.router);

app.use((req,res,next)=>{
    //res.status(404).send("<html>Page Not Found</html>");
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
