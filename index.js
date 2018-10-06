/**
 * Created by Oleg on 26/12/2015.
 */
var express = require('express');

var app = express();

// var smtpTransport = nodeMailer.createTransport("SMTP",{
//     service: "Gmail",
//     auth: {
//         user: "lumy.mailer@gmail.com",
//         pass: "n1NZgxUqJbQE"
//     }
// });

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('public/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});