var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const user = require('./model/userDetails');
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
// import AdminHome from './Admindashboard';


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable cors for all routes
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', usersRouter);
app.use('/userDashboard', usersRouter);
app.use('/adminDashboard', usersRouter);
app.use('/userHome', usersRouter);
app.use('/allUsers', usersRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });




///////////////////////////////////////////////////////////////////////

const mongoUrl = "mongodb+srv://buddinikl1996:Nikeweb96@nike-0.axb2bev.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => console.log(e));

require("../server/model/userDetails");

const User = mongoose.model("UserInfo");

app.post('/register', async (req, res) => {
    const {name, email, password, userType} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({email});

        if(oldUser){
            return res.json({error: "User Exists"});
        }
        await User.create({
            name,
            email,
            password: encryptedPassword,
            userType
        });
        res.send({ status: 'ok' });
    } catch (error) {
        res.send({ status: 'error' });
        console.error('Error:', error);
        //res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
})

app.post('/login', async (req,res) => {
    const {email, password} = req.body;

    //checking whether if email exist or not
    const user = await User.findOne({email});
    if(!user) {
        return res.json({error: "User Not Found"});
    }
    //check password and  comparing and decrypting it
    // because in register password field we encrypted
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email:user.email }, JWT_SECRET);

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        }else{
            return res.json({error: "error"});
        }
    }
    res.json({status: "error", error: "Invalid Password"});

});

app.post('/userData', async (req, res) => {
    // const {token} = req.body;
    // try {
    //     const user=jwt.verify(token, JWT_SECRET);
    //     console.log(user);
    //     const userEmail = user.email;
    //     User.findOne({email: userEmail}).then((data) => {
    //         res.send({status: "ok",  data:data});
    //     })
    //         .catch((error) => {
    //         res.send({status: "error", data: data});
    //     });
    // }catch (error){
    //
    // }

    const { token } = req.body;
    try {
        const user=jwt.verify(token, JWT_SECRET);
        console.log(user);
        const userEmail = user.email;

        // Use the User model to find the user
        User.findOne({ email: userEmail })
            .then((data) => {
                res.send({ status: "ok", data: data });
            })
            .catch((error) => {
                res.send({ status: "error", data: error });
            });
    } catch (error) {
        // Handle the error (e.g., invalid token)
        res.send({ status: "error", data: error.message });
    }
});

app.listen(4001, () => {
  console.log("Server Started");
})

// const port = 4001; // Change this to a different port number
// app.listen(4001, () => {
//     console.log('Server is running on port 4000');
// });

app.get("/getAllUsers", async (req,res) => {
    try {
        const allUser = await User.find({});
        res.send({status: "ok", data:allUser});
    }catch (error) {
        console.log(error);
    }
})


module.exports = app;
