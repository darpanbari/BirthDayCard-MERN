// // import AWS from 'aws-sdk';

// // AWS.config.update({
// //     accessKeyId: 'YOUR_ACCESS_KEY_ID',
// //     secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
// //     region: 'us-west-2' // Replace with your desired AWS region
// //   });

// //   const ses = new AWS.SES();

// const sendEmail = async (to, subject, body) => {
//   const params = {
//     Source: 'darpanbari056@gmail.com',
//     Destination: {
//       ToAddresses: [to]
//     },
//     Message: {
//       Subject: {
//         Data: subject
//       },
//       Body: {
//         Text: {
//           Data: body
//         }
//       }
//     }
//   };

//   try {
//     // await sendEmail(params).promise();
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send email');
//   }
// };

// export default sendEmail



