const jwt =require('jsonwebtoken');

const User = require('../models/user');

module.exports.verifyUser=function(req, res,next){

    try{
        const token=req.headers.authorization.split(" ")[1];
        const decodeData = jwt.verify(token, 'secretkey');
        User.findOne({_id: decodeData.UserId})
        .then(function(result){
            res.user = result;
            
            next()
        })
        .catch(function(err){
            res.status(401).json({message:"Unauthorized access"})
        })

        
    }
    catch(err){
        res.status(401).json({message:"Unauthorized access"})
    }

}
