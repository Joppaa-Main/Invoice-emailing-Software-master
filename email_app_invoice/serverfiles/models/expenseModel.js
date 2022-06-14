var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  expensedate: Date,
  categoryname: String,
  expenseamount: { type: String, required: true },
  projectreference: String,
  expensenotes: String,
  purchasename: String,
  paymentmethod: String,
  user: { type: Schema.Types.ObjectId, ref: "userObj" },


}, { timestamps: true });

//universal code for creating a new database instances
exports.addinstancetodb = function (inmodel, inModel) {
  return inModel.create(inmodel).then(docModel => {
    console.log("\n>> Created Tutorial:\n", docModel);
    return docModel;
  });
}
ExpenseSchema
  .virtual('url')
  .get(function () {
    return '/expenses/' + this._id;
  });


module.exports = mongoose.model('InvoiceExpense', ExpenseSchema);