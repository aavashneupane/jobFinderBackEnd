const jwt =require('jsonwebtoken');

const User = require('../models/user');

module.exports.verifyUser = function(req,res, next){
    // console.log(req.headers.authorization.split(" ")[1])
     try{
         const token = req.headers.authorization.split(" ")[1];
         const decodeData = jwt.verify(token, 'secrectkey');
       //  console.log(decodeData)
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
// module.exports.verifyUser = function(request, response, next){
//     try {
//       const token = request.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token,'secretkey');
//       const verifyUser = User.findOne({
//         _id: decoded.id,
//         "authTokens.token": token,
//       });
//       if (!verifyUser) {
//         response.status(404).json({ success: false, error: "User not found !" });
//       } else {
//         request.token = token;
//         request.verifyUser = verifyUser;
//         next();
//       }
//     } catch (error) {
//       console.log("auth.js", error.message);
//       response
//         .status(401)
//         .json({ success: false, error: "Unauthorized. Token Missing !" });
//     }
//   }; 

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
    else if(req.user.role!=='Customer'){
        return res.status(401).json({message: "Unauthorization Acess customer 1"});
    }

    next();
}
