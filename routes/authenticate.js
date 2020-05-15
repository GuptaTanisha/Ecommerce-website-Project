var express = require("express");
var auth = express.Router();
var mongoose = require("mongoose");
var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
mongoose.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true, useNewUrlParser: true }
);


const UserModel = require("../model/usermodel");
const ProductModel = require("../model/productmodel");


//----------------------------------------------------------------------------authenticate start

auth.use(passport.initialize());
auth.use(passport.session());

const checkFun = async(email, password, done) =>{
  UserModel.findOne({"email": email },(err, data) => {
        if (err) throw err;
        if (!data) {
            return done(null, false);
        }
           bcrypt.compare(password, data.password, (err, match) => {
            if (err) {
                return done(null, false);
            }
            if (!match) {
                return done(null, false);
            }
            if (match) {
                return done(null, data);
            }
        });
      
    })

      
   }
    
var localStrategy = require('passport-local').Strategy;
passport.use(new localStrategy({ usernameField: 'email' },checkFun))

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    UserModel.findById(id, function (err, user) {
        cb(err, user);
    });
});


//---------------------------------------------------------------------------authenticate end
auth.post('/login', (req, res, next) => {
 	 passport.authenticate('local', {
         failureRedirect: '/login',
         successRedirect: '/',
     }) (req, res, next);
 });

 auth.post("/signup", async (req, res) => {
  var name = req.body.fname +" "+ req.body.lname;
  var email = req.body.email;
 const hashedPassword = await bcrypt.hash(req.body.pass, 10)
  const userr = new UserModel({
    name: name,
    email: email,
    password: hashedPassword,
  });
  try {
    await userr.save();
    console.log(userr);
     res.redirect("/");
  } catch (err) {
    res.status(500).send(err);
  }
  
 });


//-------------------------------------------------------database view start--------------
auth.get("/db",async(req,res)=>{
const data= await UserModel.find({});
try{
	res.send(data)
}
catch(err)
{console.log(err);}

});
//-----------------------------------------------------------data base view end----------------

module.exports=auth;
