const jwt =require('jsonwebtoken');

const User = require('../models/user');

// module.exports = function(req, res, next) {
//     //get the token from the header if present
//     const token = req.headers["x-access-token"] || req.headers["authorization"];
//     //if no token found, return response (without going to the next middelware)
//     if (!token) return res.status(401).send("Access denied. No token provided.");
  
//     try {
//       //if can verify the token, set req.user and pass to next middleware
//       const decoded = jwt.verify(token, config.get("myprivatekey"));
//       req.user = decoded;
//       next();
//     } catch (ex) {
//       //if invalid token
//       res.status(400).send("Invalid token.");
//     }
//   };


module.exports.verifyUser = function(req,res, next){
 //   console.log(req.headers.authorization.split(" ")[1])
    
    //console.log(decodeData)
     try{
         const token = req.headers.authorization.split(" ")[1];
         const decodeData = jwt.verify(token, 'secretkey');
        // console.log(decodeData)
         User.findOne({_id : decodeData.userID})
         .then(function(result){
             ///Success
             req.user = result;
            //  req.id=result._id;
            //  req.email=result.email
             
            //  console.log(req.user);
            //  console.log(req.id);
            //  console.log(req.email);
             
             //console.log(result);
             next();
             
         })
         .catch(function(err){
             res.status(401).json({message : err})
         })
     }
     catch(err){
      res.status(401).json({message : "Access is Unauthorized!!"})
     }
 }
//new auth
// module.exports.verifyUser = async (request, response, next) => {
//     try {
//       const token = await request.headers.authorization.split(" ")[1];
//       const decoded = await jwt.verify(token, "secrectkey");
//       const authUser = await User.findOne({
//         _id: decoded.id,
//         "authTokens.token": token,
//       });
//       if (!authUser) {
//         response.status(404).json({ success: false, error: "User not found !" });
//       } else {
//         request.token = token;
//         request.authUser = authUser;
//         next();
//       }
//     } catch (error) {
//       console.log("auth.js", error.message);
//       response
//         .status(401)
//         .json({ success: false, error: "Unauthorized. Token Missing !" });
//     }
//   };
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
     console.log(req.user.role)
 
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
