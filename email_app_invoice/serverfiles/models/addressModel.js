var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  locationName: { type: String, required: true },
  houseNumber: Number,
  addressLine: String,
  country: String,
  city: String,
  region: String,
  postalcode: String,
  addressphone: Number,
  addressfax: Number,
  createdby: String,

}, { timestamps: true });

//Virtual for Location's URL

LocationSchema
  .virtual('url')
  .get(function () {
    return '/location/' + this._id;
  });

module.exports = mongoose.model('InvoiceLocations', LocationSchema);
