const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
    {
        name: String,
        email:  String,
        password: String,
        userType: String,
    },
    {
        collection: "UserInfo"
    }
);

mongoose.model("UserInfo", UserDetailsSchema);
