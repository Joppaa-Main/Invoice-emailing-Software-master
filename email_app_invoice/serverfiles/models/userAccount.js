var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var UserAccountSchema  = new Schema ({

    accountname:{type: String, required: true},
    contactnumber: { type: Number, required: true },
    displayname :  {type: String, required: true},
    companywebsite :  String,
    userid: {type:Schema.Types.ObjectId, ref: "InvoiceUser"},
    locations : {type:Schema.Types.ObjectId, ref: "InvoiceLocations"},
    items : [{type:Schema.Types.ObjectId, ref: "Invoiceitem"}]
}, { timestamps: true });

UserAccountSchema
.virtual('url')
.get(function () {
  return '/user/accounts/' + this._id;
});

UserAccountSchema.virtual('useritems',{
  ref : 'InvoiceItem',
  localField: '_id',
  foreignField: ''
});

//universal code for creating a new database instances


const addUseridToAccount = function(acountId, user) {
  return InvoiceAccount.findByIdAndUpdate(accountid,{ $push: {userid: user._id } },
    { new: true, useFindAndModify: false }
  );
};

module.exports = mongoose.model('InvoiceAccount', UserAccountSchema);
//Fields 
// accountname:
// contactnumber:
// displayname : 
// companywebsite :
// userid: 
// location : 
