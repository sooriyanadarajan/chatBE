// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const sendMail = async function (email, templateId, replacements) {
//     var mailOptions = {
//         from: {
//             // name: process.env.EMAIL_PLATFORM_NAME,
//             email: process.env.USER_EMAIL,
//         },
//         to: email,
//         templateId: templateId,
//         dynamic_template_data: replacements,
//     };
//     await sgMail.send(mailOptions, (err, result) => {
//         if (err) {
//             console.log(err,'error')
//             return false;
//         } else {
//             console.log('send mail in mail func' + result)
//             return true;
//         }
//     })
// }

// module.exports = { sendMail }

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = async function (email, value) {
    const msg = {
        to: email, // Change to your recipient
        from: process.env.USER_EMAIL, // Change to your verified sender
        subject: value.subject,
        html: 'Hai' + '     ' + value.name + '!' + 'kindly check your token' + '   ' + value.data
    }
    console.log(value, 'value')

    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = { sendMail }
