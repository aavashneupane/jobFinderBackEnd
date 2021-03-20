
const Joi =require('@hapi/joi');

const OPTIONS = {
    language: {
        key: '{{label}} '
    }
};

// sign up validation
const SIGNUP = (signUpData) => {
    const signUpSchema = Joi.object().keys({
        firstName: Joi.string().min(2).max(20).required().label("First name"),
        lastName: Joi.string().min(2).max(20).required().label("Last name"),
        email: Joi.string().email({ minDomainSegments: 2 }).required().label("Email"),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(8).max(15).required().label("Password"),
    });

    return Joi.validate(signUpData, signUpSchema, OPTIONS);
}

// sign in validaiton
const SIGNIN = (signInData) => {
    const signInSchema = Joi.object().keys({
        email: Joi.string().email({ minDomainSegments: 2 }).required().label("Email"),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(8).max(15).required().label("Password"),
    });

    return Joi.validate(signInData, signInSchema, OPTIONS);
}

//add job validation
const JOB = (jobData) => {
    const jobSchema = Joi.object().keys({
      jobtitle: Joi.number().min(0).required().label("jobtitle"),
      jobtype: Joi.number().min(0).required().label("jobtype"),
      jobdescription: Joi.number().min(0).required().label("jobdescription"),
      requiredexperience: Joi.number().min(0).required().label("requiredexperience"),
      jobprice: Joi.number().min(0).required().label("jobprice"),
      date: Joi.date().required().label("Date"),
      creator: Joi.string().required().label("Creator"),
    });
    return Joi.validate(jobData, jobSchema, OPTIONS);
};

module.exports = {
    SIGNUP, SIGNIN,JOB
};