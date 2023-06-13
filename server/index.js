import express from "express";
import dotenv from 'dotenv'
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import birthdayRouter from "./src/routes/birthdayRouter.js"
import joiningDateRouter from "./src/routes/joiningDateRouter.js"
// import emailRouter from "./src/routes/emailRouter.js"
import cron from 'node-cron'
import sendEmailToALL from "./cron.js";


const app = express();

dotenv.config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//middelwares
app.use(cors());
app.use(express.json());


app.use("/api/hr",  birthdayRouter)
app.use("/api/hr",  joiningDateRouter)
// app.use("/email", emailRouter)

mongoose.connect(`mongodb://0.0.0.0:27017/Task1`)
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.log(err)
})


//PORT
const PORT = 2020;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${PORT}`
  );
});

cron.schedule(`0/2 8-19 * * *`,()=>{
  console.log('running task 1')
})

// sendEmailToALL()


// import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
// import nodemailer from 'nodemailer';

// // Configure the AWS region
// const region = 'us-east-1'; // Replace with your desired AWS region

// // Create an instance of the AWS Lambda client
// const lambdaClient = new LambdaClient({ region });

// const credentials = {
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// };

// // Set the credentials on the Lambda client
// lambdaClient.config.credentials = credentials;

// // Define the parameters for invoking the Lambda function
// const params = {
//   FunctionName: 'newCronLambda',
//   InvocationType: 'RequestResponse',
//   LogType: 'Tail',
//   Payload: JSON.stringify({ key1: 'value1', key2: 'value2' }), // Ensure the JSON payload is constructed correctly
// };

// // Function to send emails
// async function sendEmails() {
//   try {
//     // Invoke the Lambda function to retrieve user data from the database
//     const data = await lambdaClient.send(new InvokeCommand(params));
//     const responseData = data.Payload;

//     console.log('Retrieved user data:', responseData);

//     const userData = new TextDecoder().decode(responseData);

//     // Create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS,
//       },
//     });

//     // Send emails to each user
//     for (const user of userData) {
//       const mailOptions = {
//         from: 'darpanbari056@gmail.com',
//         to: user.email,
//         subject: 'Your Daily Update',
//         text: `Hello ${user.name},\n\nThis is your daily update.\n\nRegards,\nYour App`,
//       };

//       // Send the email
//       const info = await transporter.sendMail(mailOptions);
//       console.log(`Email sent to ${user.email}. Message ID: ${info.messageId}`);
//     }

//     console.log('All emails sent successfully');
//   } catch (err) {
//     console.log('Error:', err);
//     if (err.code === 'UnrecognizedClientException' && err.message === 'The security token included in the request is invalid.') {
//       console.log('Please check your AWS credentials and permissions.');
//     }
//   }
// }

// // Invoke the function to send emails
// sendEmails();

