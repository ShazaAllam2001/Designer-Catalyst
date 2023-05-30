const nodemailer = require('nodemailer');

const bugReportsMail = "shazaallam80@gmail.com";

function sendBugReport(email, password, title, description) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });

    var mailOptions = {
        from: email,
        to: bugReportsMail,
        subject: title,
        text: description
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
        } 
        else {
            console.log('Email sent: ' + info.response);
        }
    });
}

sendBugReport("shazaallam119@gmail.com", "odgkcyhzzesamwmt", "Sending Email using Node.js", "That was easy again!");