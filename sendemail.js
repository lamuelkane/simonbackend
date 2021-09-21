import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    //port:  465,
    //secure : true,
    auth: {
        user: 'hernandezpharel@gmail.com',
        pass: 'lanyoestate'
      }
    });
  
    const mailOptions = {
    from: 'hernandezpharel@gmail.com',
    to: 'ashulemuel@gmail.com',
    subject: 'Thanks For Shopping With Us',
   // html:"<h1>hello world</h1>"
   text: `this worked `
  }
  
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
          console.log(error)
      } else {
            console.log(`email sent ${info.response}`)
        }
      })
    
    console.log(`you are here`)