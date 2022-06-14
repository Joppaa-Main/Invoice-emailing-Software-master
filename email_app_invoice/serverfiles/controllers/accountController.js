
const { body,validationResult } = require('express-validator');
var UserAccount = require('../models/userAccount');
const addAccountToUser= function(userId, account) {
    return UserAccount.findByIdAndUpdate(userId,{ $push: {useraccountid: account._id } },
      { new: true, useFindAndModify: false }
    );
  };

let AccountController = { 
useraccount_list :  async  function(req,res) {
    //must be admin
    allAccounts = await UserAccount.find() ;
    res.json(allAccounts);
},
useraccount_detail : async function (req,res){
    res.send('NOT IMPLEMENTED: User detail' +req.params.id);   
},
useraccount_create_get : async function (req,res){
    res.send('NOT IMPLEMENTED: useraccount create GET)')

},
useraccount_create_post : async function (req, res) {
    console.log("You're bout to create new account");
    var  createdAccount = await addinstancetodb({
    accountname : req.body.acname,   
    contactnumber: req.body.number,
    displayname: req.body.displayname,
    companywebsite:  req.body.website,
    userid: req.body.userid,
    locations: req.body.location,
    items: req.body.items
   },UserAccount);
   res.json("\n>> Created User:\n"+ createdAccount);
        console.log("executed createaccount");
     },
// GET request to call form to delete useraccount on post request
useraccount_delete_get : function (req, res) {
    res.send('NOT IMPLEMENTED: useraccount delete GET');
}, 
//Handle User delete on Post request.
useraccount_delete_post : async function (req,res){

    res.send('NOT IMPLEMENTED: useraccount delete POST)');
},
// GET request to call form to update useraccount on post request
useraccount_update_get : async function (req,res){

    res.send('NOT IMPLEMENTED: User update GET ');
},
// POST request to update an new useraccount from body and save it to db
useraccount_update_post : async function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
},


}
module.exports = AccountController;