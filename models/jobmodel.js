const mongoose = require('mongoose');

//jobs
const jobs =mongoose.model('jobs',{
    jobtitle:{
        type: String,
      //  required: true
    },
    jobtype:{
        type: String,
        
    },
    jobdescription:{
        type: String,
      //  required: true,
        
    },
    requiredexperience:
    {
        type: String,
        
    },

    jobprice:{
        tye: String,
    },
    
    

})


    
module.exports = jobs;