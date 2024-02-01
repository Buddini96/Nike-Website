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
const bodyParser = require('body-parser');

//import routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Enable cors for all routes
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', usersRouter);
app.use('/userDashboard', usersRouter);
app.use('/adminDashboard', usersRouter);
app.use('/userHome', usersRouter);
app.use('/allUsers', usersRouter);
app.use(productRouter);


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
const PORT = 4001;
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
const Product = require("./model/product");
//require("../server/model/product");

const User = mongoose.model("UserInfo");
//const Product = mongoose.model("product");

const schemaData = mongoose.Schema({
    id : Number,
    name : String,
    price : Number,
    currency : String,
    image : String,
},{
    timeStamp : true
})

//read products
//http://localhost:4001/getAll
app.get('/getAll', async (req, res) => {
    const data = await Product.find({});
    res.json({success: true, data: data})
});

//save product
//http://localhost:4001/save
app.post('/save', async (req,res) => {
    console.log(req.body);
    const data = new Product(req.body);
    await data.save();
    res.send({success : true, message : "data save successfully", data : data});
});

//update product
//http://localhost:4001/update
app.put('/update/:id', async (req,res) => {
    console.log(req.body);
    const {_id, ...rest} = req.body;
    console.log(rest);
    const data = await Product.updateOne({_id : _id},rest);
    //const data = await Product.findByIdAndUpdate(_id, rest);
    //await data.save();
    res.send({success : true, message : "data updated successfully", data : data})
});



//delete product
//http://localhost:4001/delete/65ae33e9478e626cd1df05c2
app.delete('/delete/:id', async (req,res) => {
    const id = req.params.id
    console.log(id)
    const data = await  Product.deleteOne({_id : id});
    res.send({success : true, message : "data deleted successfully", data : data});
});


/*-------------user authentication---------------------*/
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

/*get all user detail*/
app.get("/getAllUsers", async (req,res) => {
    try {
        const allUser = await User.find({});
        res.send({status: "ok", data:allUser});
    }catch (error) {
        console.log(error);
    }
})

/*delete user*/
// app.post("/deleteUser", async (req,res) => {
//     //first get user id from req body
//     const {userid} = req.body;
//     try {
//         //delete data which id similar to userid.
//         User.deleteOne(
//         {_id:userid}, function (err, res){
//                 console.log(err); //otherwise get this error
//             });
//         //if user successfully deleted get this reponse
//         res.send({status: "ok", data:"Deleted"});
//
//     }catch (error) {
//         console.log(error);
//     }
//
// })

app.post("/deleteUser", async (req, res) => {
    // first get user id from req body
    const { userid } = req.body;

    try {
        // delete data which id is similar to userid.
        const result = await User.deleteOne({ _id: userid });

        if (result.deletedCount === 1) {
            // If user successfully deleted, send a success response
            res.status(200).json({ success: true, data: "User deleted successfully" });
        } else {
            // If no user was deleted, send a response indicating failure
            res.status(400).json({ success: false, data: "User not found or unable to delete" });
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        // Send a response indicating server error
        res.status(500).json({ success: false, data: "Internal Server Error" });
    }
});




module.exports = app;
