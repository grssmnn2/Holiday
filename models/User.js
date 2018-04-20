const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    }
})

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);