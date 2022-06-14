var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InvoiceSchema = new Schema({
    invoicenumber: { type: String, required: true },
    ordernumber: String,
    invoicedate:{type: Date, default: Date.now },
    paymentterms: String,
    duedate: {type: Date, default: Date.now,required: true},
    salesperson: String,
    subject: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: "InvoiceItem",required: true }],
    discount: Number,
     // subtotal: {type: Number,required: true},
    paid: {type: Number},
    // outstanding: {type: Number,required: true}, // total: {type: Number,required: true},
    customernotes: String,
    termsandConditions: String,
    customer: { type: Schema.Types.ObjectId, ref: "InvoiceCustomer" ,required: true},
    user: { type: Schema.Types.ObjectId, ref: "InvoiceUser" },
}, { timestamps: true });

InvoiceSchema.virtual('url').get(function () {
  return 'invoice/' + this._id;
});

//create virtuals for outstanding balance, total balance, subtotal
//universal code for creating a new database instances



// Virtuals
// Subtotal, Vat

module.exports = mongoose.model('Invoice', InvoiceSchema);

