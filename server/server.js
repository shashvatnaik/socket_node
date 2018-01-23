const path = require(`path`);
const express = require(`express`);
const http = require(`http`);
const socket = require(`socket.io`)

const {router} = require(`../routes/routes`);
const PublicPath = path.join(__dirname,`../public`);

const Port = process.env.PORT || 5497;
let app = express();

app.use(`/`,router);
app.use(express.static(PublicPath));

let server = http.createServer(app);
let io = socket(server);
io.on(`connection`,(socket)=>{
    console.log(`new user connected!`);
    socket.on(`disconnect`,()=>{
        console.log(`user disconnected!`);
    });
});

const publicPath = path.join(__dirname,'../public');
console.log(publicPath);

server.listen(Port,()=>{console.log(`app is listening on port ${Port}`)})