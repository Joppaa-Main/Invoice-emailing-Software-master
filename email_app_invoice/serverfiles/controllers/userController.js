
const { body,validationResult } = require('express-validator');
var User = require('../models/userModel');
var UserAccount = require('../models/userAccount');

let UserController = {
//Display list of all users
users_list :  async  function(req,res) {
    allUsers = await User.find() ; 
    res.json(allUsers);
},
//Display detail page for a specific User
users_detail : async function (req,res){
res.send('NOT IMPLEMENTED: User detail' +req.params.id);

},
//Display Users create form on GET request
users_create_get : async function (req,res){
    res.send('NOT IMPLEMENTED: Users create GET)')

},
// POST request to create a new users from body and save it to db
users_create_post : async function (req, res) {
    console.log("You're about to create new user");
    var  createdUser = await addinstancetodb({
        username : req.body.name,    
        useremail: req.body.email,
        userpassword: req.body.password,
        isAdmin:  req.body.admin,
        useraccountid: req.body.account,
    },User);
    res.json("\n>> Created User:\n"+ createdUser);
    // res.json(createdUser);
    console.log("executed create user");
      },

// GET request to call form to delete users on post request
   users_delete_get : function (req, res) {
       res.send('NOT IMPLEMENTED: Users delete GET');
   },
//Handle User delete on Post request.
users_delete_post : async function (req,res){

    res.send('NOT IMPLEMENTED: Users delete POST)');
},
// GET request to call form to update users on post request
users_update_get : async function (req,res){
    const addUserToAccount = function(accountId, user) {
        return User.findByIdAndUpdate(accountId,{ $push: {userid: user._id } },
          { new: true, useFindAndModify: false }
        );
      };
    res.send('NOT IMPLEMENTED: User update GET ');
},
// POST request to update an new users from body and save it to db
users_update_post : async function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
},


};//end of controller
module.exports = UserController;