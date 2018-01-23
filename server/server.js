const path = require(`path`);
const express = require(`express`);

const {router} = require(`../routes/routes`);
const PublicPath = path.join(__dirname,`../public`);

const Port = process.env.PORT || 5497;
let app = express();

app.use(`/`,router);
app.use(express.static(PublicPath));

const publicPath = path.join(__dirname,'../public');
console.log(publicPath);

app.listen(Port,()=>{console.log(`app is listening on port ${Port}`)})