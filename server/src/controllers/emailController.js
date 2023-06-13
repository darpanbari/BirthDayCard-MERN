// import SendEmail from "../../EmailRepository.js";

// const EmailRepository = {
//     sendEmail: SendEmail
//   };    

// export const sendEmail = async (req, res) => {
//   const { to, subject, body } = req.body;

//   try {
//     await EmailRepository.sendEmail(to, subject, body);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// };

