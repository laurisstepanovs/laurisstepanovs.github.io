var express = require('express'),
path = require('path'),
nodeMailer = require('nodemailer'),
bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); 
var port = 3000;

app.post('/send-email', function (req, res) {
  console.log("Asdfasdf");
    var transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'la.stepanovs@gmail.com',
          pass: 'hswkbgnqjuqjvhdc'
        }
      });

      console.log(req.body);
      
      var mailOptions = {
        to: 'la.stepanovs@gmail.com',
        replyTo:`${req.body.name} <${req.body.email}>`,
        subject: req.body.badget,
        text: req.body.description,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.err(error);
          res.end(error);
        } else {
          console.info('Email sent: ' + info.response);
          res.end(info.response);
        }
      });
});
      
app.listen(port, function(){
    console.log('Server is running at port: ',port);
});