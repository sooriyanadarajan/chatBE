const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { stringify } = require('querystring')

// Email Validation
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// PassWord Validation
var validatePassword = function (password) {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#()+-_\$%\^&\*])(?=.{8,})/;
    return strongRegex.test(password);
}


const userScheme = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please provide name']
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'please provide email.. email must'],
        validate: [validateEmail, 'Please fill a valid email format'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        trim: true,
        minlength: 8,
        validate: [validatePassword, 'Password Invalid format. At least 1 capital letter.., 1 lowercase letter.., 1 special character.., 1 numeric character..,'],
    },
    DOB: {
        type: String
    },
    mobileNum: {
        type: Number,
        minlength: 10,
    },
    address: {
        type: String,
    },
    bio: {
        type: String
    },
    country: {
        type: String
    },
    country_code: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    login_status: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
        required: false
    },
    resetPasswordExpires: {
        type: Date,
        required: false
    },
    profile_image: {
        type: String,
        required: false
    },
    otp: {
        type: Number
    }

}, { timestamps: true });

// Sign JWT and return
userScheme.methods.generateAuthToken = async function () {
    const user = this
    console.log(user, 'from user model')
    const token = await jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
    console.log(token, 'token from model')
    return token
}

// // check email and password match
// userScheme.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({ email })
//     if (!user) {
//         return res.send(400).json({ message: 'User Not Found. Kindly Register' })
//     }
//     if (!user.password) {
//         return res.send(400).json({ message: 'Invalid Credential' })

//         // throw new Error('Invalid Credential')
//     }
//     const check = await bcrypt.compare(password, user.password)
//     if (!check) {
//         return res.send(400).json({ message: 'Invalid Credential' })

//         // throw new Error('Invalid Credential')
//     }
//     return user
// }

//resetPasswordToken using crypto
userScheme.methods.generatePasswordReset = async function () {
    const user = this
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex')
    user.resetPasswordExpires = Date.now() + 3600000 //expires in an hour
}

// Encrypt password using bcrypt
userScheme.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
        user.confirmPassword = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('user', userScheme)

module.exports = User