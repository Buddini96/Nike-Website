const mongoose = require('mongoose');

//mongo db model using mongoose
const ProductModel = mongoose.Schema(
    {
        //define properties
        "id" : {
            require: true, // aniwaryen product name ekk thiyenn ona
            type : Number,
            unique : true, //duplicate wenn ba values
            index: true
        },

        "name" : {
            require: true, // aniwaryen product name ekk thiyenn ona
            type: String
        },
        "price" :  {
            require: true, // aniwaryen product name ekk thiyenn ona
            type: Number // price ek decimal unath js wladi numbers kiyl kiynnne
        },
        "currency" :  {
            require: true, // aniwaryen product name ekk thiyenn ona
            type: String //lkr string nisa error ekk awa
        },
        "image" :  {
            require: true, // aniwaryen product name ekk thiyenn ona
            type: String
        }
    },
    {versionKey: false} // "__v": 0 meke enne nthiwenn krnne
);

//const Product = mongoose.model('Product', ProductModel);

module.exports = mongoose.model('Product', ProductModel);
