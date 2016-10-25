/**
 * Created by Oleg on 26/12/2015.
 */
var express = require('express');
var nodeMailer = require('nodemailer');

var app = express();

var smtpTransport = nodeMailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "lumy.mailer@gmail.com",
        pass: "n1NZgxUqJbQE"
    }
});
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('public/index');
});

app.get('/send', function (request, response) {
    var mailOptions = {
        to: "lumyflowers@gmail.com",
        subject: request.query.fullName,
        text: " שם" + request.query.fullName + "/n" +
        " טלפון" + request.query.phone + "/n" +
        " מייל" + request.query.email + "/n" +
        " תאריך" + request.query.date + "/n" +
        " שעה" + request.query.hour + "/n" +
        " מקום האירוע" + request.query.place + "/n" +
        " תיאור האירוע" + request.query.description + "/n"
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, mailResponse) {
        if (error) {
            //console.log(error);
            response.end("error: " + error);
        } else {
            //console.log("Message sent: " + mailResponse.message);
            response.end("mail is sent");
        }
    })
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});