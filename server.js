const express = require("express");
const path = require('path');
const serveStatic = require('serve-static');
const mongoose = require("mongoose");
//const Song = require("./models/musicmodel");
//const Admin = require("./models/adminModel");
const bodyParser = require('body-parser');
//const admin = require("./routes/adminRoute");
//const about = require("./routes/aboutRoute");
//const bookus = require("./routes/bookusRoute");
//const members = require("./routes/membersRoute");
const passport = require("passport");
//const session = require("cookie-session");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("express-flash");
//const auth = require("./passportAuth/auth");
var methodOverride = require("method-override");



 const app = express();






app.use(bodyParser.urlencoded({ extended: false }));

//telling express to use certainpackages
 app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

 app.set("view engine", "ejs");

//auth(passport, Admin);

//letting express use passport and session
/*app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
*/



//use the adminRoute.js
//app.use("/Admin", admin);
//use the aboutRoute.js
//app.use("/About", about);
//use the bookus.js
//app.use("/Bookus", bookus);
//use the members.js
//app.use("/Members", members);




//get request for the home view
 app.get("/", async function(req, res, next){



   res.render("home");

 });





 app.listen(process.env.PORT || 3000, () => {
   console.log("App listening on port 3000");
 });
