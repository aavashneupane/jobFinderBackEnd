const jwt =require('jsonwebtoken');

const User = require('../models/user');

module.exports.verifyUser = function(req,res, next){
    // console.log(req.headers.authorization.split(" ")[1])
     try{
         const token = req.headers.authorization.split(" ")[1];
         const decodeData = jwt.verify(token, 'secrectkey');
         console.log(decodeData)
         User.findOne({_id : decodeData.userID})
         .then(function(result){
             ///Success
             req.user = result;
             next()
         })
         .catch(function(err){
             res.status(401).json({message : err})
         })
     }
     catch(err){
      res.status(401).json({message : "Access is Unauthorized!!"})
     }
 }
 
 ///second gaurd done
 
 module.exports.verifyAdmin = function(req,res,next){
     if(!req.user){
         return res.status(402).json({message : "Unauthorized user"});
     }
     else if(req.user.role!=='Admin'){
         return res.status(401).json({message: "Unauthorized user"});
     }
 
     next();
 }
 
 module.exports.verifyCompany = function(req,res,next){
     if(!req.user){
         return res.status(402).json({message : "Unauthorized user"});
     }
     else if(req.user.role!=='Company'){
         return res.status(401).json({message: "Unauthorized user"});
     }
 
     next();
 }
 module.exports.verifyCustomer = function(req,res,next){
    if(!req.user){
        return res.status(402).json({message : "Unauthorized customer!!"});
    }
    else if(req.user.role!=='customer'){
        return res.status(401).json({message: "Unauthorization Acess customer 1"});
    }

    next();
}
