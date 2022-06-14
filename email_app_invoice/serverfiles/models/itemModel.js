var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema  = new Schema ({
type : String, 
name : {type: String, required: true},
unit : String, 
sellingprice : { type: Number, required: true },
description : String, 
user: {type: Schema.Types.ObjectId, ref: "InvoiceAccount",required: true},
}, { timestamps: true });
//universal code for creating a new database instances
exports.addinstancetodb = function (inmodel,inModel) {
    return inModel.create(inmodel).then(docModel => {
     console.log("\n>> Created Item:\n", docModel);
     return docModel;
    });
  }
ItemSchema.virtual('url')
.get(function () {
  return 'item/' + this._id;
});

module.exports = mongoose.model('InvoiceItem', ItemSchema,);
