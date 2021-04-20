const USER=require("../models/user");
const JOB=require("../models/jobmodel");
const APPLY=require("../models/applymodel");
const QUERY=require("../models/queries");
const mongoose=require("mongoose");

const url = "mongodb://localhost:27017/jobfindertest_database";

beforeAll(async() => {
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex: true,
    });
})
afterAll(async() => {
    await mongoose.connection.close();
});




///username
// describe('User Schema test anything', () => { // the code below is for insert testing
//     it('Add User testing anything', () => {
//         const register = {

//             'firstname': 'lnames',            
//              'lastname': 'test',            
//              'email': 'test@gmail.com',            
//              'password': 'password',            
//              'address': 'Nepal',            
//             'phone': '0989898987',
//             'age': '22'
            
            
//         };
//         return USER.create(register).then((pro_ret) => {
//             expect(pro_ret.firstname).toEqual('lnames');
//         });
//     });
  
// });



//         describe('Query Schema test anything', () => { // the code below is for insert testing
//             it('Add query testing anything', () => {
//         const query = {

//             'userid': '607e6c1a9cc8ec1fd0e2126f',
//             'firstname': 'testname',
//             'lastname': 'testlname',
//             'email': 'test@test.com',
//             'query': 'this is query',

            
//         };
//         return QUERY.create(query).then((pro_ret) => {
//             expect(pro_ret.query).toEqual('this is query');
//         });
//     });
// });


    // describe('Job Schema test anything', () => { // the code below is for insert testing
    //     it('Add job testing anything', () => {
    //     const job = {

    //         'jobtitle': 'testtitles',
    //         'jobtype': 'testtype',
    //         'jobdescription': 'testdesc',
    //         'requiredexperience': 'testreq',
    //         'jobprice': '123',

            
    //     };
    //     return JOB.create(job).then((pro_ret) => {
    //         expect(pro_ret.jobtitle).toEqual('testtitles');
    //     });
    
    // });
    // });


///apply
    // describe('apply test anything', () => { // the code below is for insert testing
    //     it('Add job testing anything', () => {
    //     const apply = {

    //         confirmStatus: 'pending'

            
    //     };
    //     return APPLY.create(apply).then((pro_ret) => {
    //         expect(pro_ret.confirmStatus).toEqual('pending');
    //     });
    
    // });
    // });














    // UPDATEEEEEE


// it("testing User Update",async()=>
// {
//     return USER.findOneAndUpdate(
//         { _id: Object("607e6c1a9cc8ec1fd0e2126f") },
//         {$set: {firstname:"UPDATED"}}////updating user's name
//     ).then((pp)=>{
//         expect(pp.firstname).toEqual("lname");
//     });
// });
    

// it("testing job Update",async()=>
// {
//     return JOB.findOneAndUpdate(
//         { _id: Object("607e6c75631e7643d4bf08b0") },
//         {$set: {jobtitle:"updatedtiiii"}}////updating job's name
//     ).then((pp)=>{
//         expect(pp.jobtitle).toEqual("testtitles");
//     });
// });


it("Applied status Update",async()=>
{
    return APPLY.findOneAndUpdate(
        { _id: Object("607e6c9f9605b32f203ecf76") },
        {$set: {confirmStatus:"Confirmed"}}////updating job's name
    ).then((pp)=>{
        expect(pp.confirmStatus).toEqual("pending");
    });
});



////DELETE
// it('to test the delete job is working or not', async() =>
// {
//     const status= await JOB.deleteMany();
//     expect(status.ok).toBe(1);
// });

// it('to test the delete query is working or not', async() =>
// {
//     const status= await QUERY.deleteMany();
//     expect(status.ok).toBe(1);
// });

// it('to test the delete Applied is working or not', async() =>
// {
//     const status= await APPLY.deleteMany();
//     expect(status.ok).toBe(1);
// });

