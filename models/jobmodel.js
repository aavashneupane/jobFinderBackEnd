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
        type: String,
    },
    
    

})


    
module.exports = jobs;