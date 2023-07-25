const User = require('../models/user')
const { sendMail } = require('../utils/accountMail')
// const otpGenerator = require('otp-generator')
const bcrypt = require('bcryptjs')




class UserController {
    constructor() { }


    async register(req, res) {
        try {
            const findEmail = await User.findOne({ email: req.body.email })
            if (findEmail) {
                return res.status(400).json({ success: false, message: `${req.body.email} is already used by another one please continue with another email` })
            }
            if (req.files) {
                if (req.files.profile_image && req.files.profile_image[0]) {
                    user.profile_image = req.files.profile_image ? req.files.profile_image[0].path : '';
                }
            }
            if (req.body.profile_pic && req.body.profile_pic != null) {
                var base64Str = req.body.profile_pic;
                var path = 'uploads/profile/';
                var optionalObj = { 'fileName': 'profile-pic-' + req.body.email, 'type': 'png' };
                user.profile_image = base64ToImage(base64Str, path, optionalObj);
            }
            const user = await new User(req.body).save();
            return res.status(200).json({ success: true, data: user, message: "Registered Successfully !" });
        }
        catch (e) {

            return res.status(400).json({ success: false, message: "Something Went Wrong !" });

        }
    }


    async logIn(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).send({ message: 'User Not Found. Kindly Register' })
            }
            const check = await bcrypt.compare(req.body.password, user.password)
            if (!check) {
                return res.status(400).send({ message: 'Invalid Credential' })
            }
            const token = await user.generateAuthToken()
            user.login_status = true
            await user.save();
            res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 }).json({ success: true, data: user, message: "Login Successful" })
        } catch (e) {
            return res.status(400).send({ success: false, message: "Something Went Wrong !" })
        }
    }


    async logOut(req, res, next) {
        const user = req.user
        user.login_status = false
        await user.save();
        res.clearCookie('token')
        res.status(200).json({ success: true, message: 'Logout Success' })
    }

    async forgotPassword(req, res, next) {
        //sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return next(new ErrorResponse(`Given Email Is Invalid`, 401))
        }
        await user.generatePasswordReset();
        await user.save();

        // otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });

        const templateId = process.env.PASSWORD_RECOVER_MAIL_TEMPLATE_ID
        const value = {
            name: user.firstName,
            data: user.resetPasswordToken,
            subject: ' Reset Password Verification'
        }
        // const replacements = user.firstName
        // const redirectUrl = user.resetPasswordToken

        await sendMail(user.email, value);
        res.status(200).json({ success: true, message: `A Reset Email Has Been Sent To ${user.email}` })
    }

    async resetPassword(req, res, next) {
        const user = await User.findOne({ resetPasswordToken: req.body.token })
        if (!user) {
            return res.send({ success: false, message: 'Password Reset Token Is Invalid Or Expired' })
        }
        //set new password
        user.password = req.body.password
        user.confirmPassword = req.body.confirmPassword
        if (user.password === user.confirmPassword) {
            user.resetPasswordToken = undefined
            user.resetPasswordExpires = undefined
            await user.save()

        } else {
            return next(new ErrorResponse(`Password And Confirm Password Are Not Same`, 401))
        }
        res.status(200).json({ success: true, message: `Your Password Has Been Updated` })
    }


}

module.exports = UserController