const nodemailer = require("nodemailer")

// creating a transporter
const transport = nodemailer.createTransport({
    service : "hotmail",
    auth : {
        user: "user email",
        password: "user password"
    }
})


const sendEmail = async (message) =>{
    return new Promise((resolve, reject)=>{
        transport.sendMail(message, (err, info) =>{
            if(err){
                return reject(err)
            }

            // console.log(info.response);
            resolve(info.response)
        })
    }) 
}

module.exports = sendEmail