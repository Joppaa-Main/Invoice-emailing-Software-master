var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema ( {
//Customer details =>
type : String,
prefix :  String,
firstname:  String,
lastname:   String,
companyname:  String,
displayname :  {type: String, required: true},
email : {type: String, required: true},
phone : { type: Number, required: true },
website :  String,
//OtherDetails =>
remarks :  String, 
paymentterms :  String,
allowportalaccess:  Boolean,
preferedlanguage :  String,
facebook :  String,
twitter :  String,
//ContactAddress =>
locations : {type:Schema.Types.ObjectId, ref: "InvoiceLocations"},
// accounts : [{type:Schema.Types.ObjectId, ref: "AccountSchema"},],
}, { timestamps: true });
//Virtual for Customer's URL
CustomerSchema
.virtual('url')
.get(function () {
  return '/customer/' + this._id;
});

CustomerSchema
.virtual('fullname')
.get(function () {
  return this.firstname + '  ' + this.lastname;
});

//universal code for creating a new database instances




module.exports = mongoose.model('InvoiceCustomer', CustomerSchema);

//Fields
// type :
// prefix :  
// firstname: 
// lastname,   
// companyname:  
// displayname :  
// email : 
// phone : 
// website :  
// remarks :  
// paymentterms :  
// allowportalaccess:  
// preferedlanguage :  
// facebook : 
// twitter : 
// Location : 