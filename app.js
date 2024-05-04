const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

// mongoose.connect("mongodb+srv://itsabhijit664:85ZWQw0upb6geRt5@cluster0.ixihn.mongodb.net/node-angular?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://itsabhijit664:" + process.env.MONGO_ATLAS_PW + "@cluster0.ixihn.mongodb.net/node-angular?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to database!');
})
.catch(() => {
    console.log('Connection failed!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

// app.use((req,res,next) => {
//     console.log('First middleware');
//     next();
// });

app.use("/api/posts" ,postsRoutes);
app.use("/api/user" ,userRoutes);

module.exports = app;