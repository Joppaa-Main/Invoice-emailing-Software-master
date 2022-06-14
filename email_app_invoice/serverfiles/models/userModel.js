var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema  = new Schema ({

username: {type: String, required: true},      
useremail: {type: String, required: true},  
userpassword: {type: String, required: true},  
isAdmin: {type: Boolean, required: true },
useraccountid: [{type: Schema.Types.ObjectId, ref: 'InvoiceAccount'}],

}, { timestamps: true });

UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//universal code for creating a new database instances
 addinstancetodb = function (inmodel,inModel) {
  return inModel.create(inmodel).then(docModel => {
   console.log("\n>> Created Tutorial:\n", docModel);
   return docModel;
  });
}

 module.exports = mongoose.model('InvoiceUser', UserSchema);

//Fields 
// username:      
// useremail: 
// userpassword:   
// isAdmin: 
// useraccount: 
