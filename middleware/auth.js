const jwt =require('jsonwebtoken');

const User = require('../models/user');

module.exports.verifyUser=function(req, res,next){

    try{
        const token=req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token,'secretkey');
        User.findOne({_id: data.UserId})
        .then(function(result){
            res.user = result;
            
            next()
        })
        .catch(function(err){
            res.status(401).json({message:"Unauthorized access1"})
        })

        
    }
    catch(err){
        res.status(401).json({message:"Unauthorized access2"})
    }

}


// module.exports.verifyUser = function(req, res, next){
//     const token = req.headers.authorization.split(' ')[1]; // token only
//     const data = jwt.verify(token, 'secretkey'); // now we have id
//     User.findOne({_id : data.UserId})
//     .then(function(result){
//         req.user = result;
//         next();
//     })
//     .catch(function(er){
//         res.status(401).json({message : "Auth failed!!"})
//     })
    

// }


//second guard 

module.exports.verifyAdmin=function(req, res, next){
    if(!req.user){
        return res.status(401).json({message:"Unauthorized access3"});
    }

    else if(req.user.role!=='Admin'){

        res.status(401).json({message:"Unauthorized access4"});
    }
    next();
    
}

////function

// module.exports.verifyAdmin=function(req, res, next){
//     if(!req.user){
//         return res.status(401).json({message:"Unauthorized access"});
//     }

//     else if(req.user.role!=='Admin'){

//         res.status(401).json({message:"Unauthorized access"});
//     }
//     next();
    
// }











