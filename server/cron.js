import birthdayModel from './src/models/birthdayModel.js'
import nodemailer from 'nodemailer'
import cron from 'node-cron'

const sendEmailToALLUser = async(emailObj)=>{
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    const mailOptions = {
        from:"darpanbari056@gmail.com",
        to: emailObj,
        subject:"Hello",
        html:"<p>This is test email</p>"
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        }
        else{
            console.log('mail haqs been sent:- ', info.response);
        }
    })
}

const sendEmailToALL =()=>{
    try{
        cron.schedule('*/10 * * * * *', async function(){
            const data = await birthdayModel.find({});
            if(data.length > 0){
                var emails = []
                data.map((key)=>{
                    emails.push(key.email);
                })
                sendEmailToALLUser(emails)
            }
        })
    }
    catch(err){
        console.log(err.message)
    }
}

export default sendEmailToALL;