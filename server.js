// Require our dependencies
var express = require('express');
var mongoose = require("mongoose");
var path = require('path');
var Trade = require("./api/models/trade");
var User = require("./api/models/user");
var bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const apiRouter = require("./api/routes/index.routes");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();


// Require our routes file pass our router object
//require("./config/routes")(router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoTrades";

// Connect mongoose to our database
mongoose.connect(db, function (error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    //     var user = new User({name: 'Maria', email: 'maria@me.com', pass: '123', trades: ["599e3a382101ef1a0004b9a5", "599e3cdb2a778f04d84f0c5a" ]});
    //      var trade = new Trade({ stock: 'LkE', _creator:  user._id});
    //     // Trade.findById("",function (err, user) {
           
           
    //    // });

    //     //var user = new User({name: 'Michael'});
    //     user.save(function(err){
    //         trade._creator.push(user);
    //         console.log(user);
    //         trade.save();
    //     });
    //      trade.save(function (err, tr) {
    //             console.log(tr);
    //             user.trades.push(tr);
    //      });
    }
});

app.get("/*", function(req, res) {
 res.sendFile(__dirname + "/public/index.html");
});

apiRouter(app);
// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});