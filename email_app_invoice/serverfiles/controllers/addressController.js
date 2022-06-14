const { body,validationResult } = require('express-validator');
var Address = require('../models/addressModel');

let AddressController = {
// Display list of all addresss.
address_list : async function  (req, res) {
    alladdress = await Address.find();
    res.json(alladdress);
},
// Display detail page for a specific address.
address_detail : async function (req, res,next) {
     res.send('NOT IMPLEMENTED: address detail: ' + req.params.id);
},
// GET request to create a new address form to be save db on submit
address_create_get : function (req, res,next) {
    res.send('NOT IMPLEMENTED: Yet');
},
// POST request to create a new address from body and save it to db
address_create_post : async function (req, res) {
    console.log("You're about to create new Address");
    var createdAddress = await addinstancetodb({
        locationName: req.body.locationName,
        houseNumber: req.body.houseNumber,
        addressLine: req.body.addressLine,
        country: req.body.country,
        city: req.body.city,
        region: req.body.region,
        postalcode: req.body.postalcode,
        addressphone: req.body.addressphone,
        addressfax: req.body.addressfax,
        createdby: req.body.createdby
    }, Address).catch(err => {
        console.log({ message: err.message });
    });
    res.json("\n>> Created New Address :\n" + createdAddress);
    console.log("executed create Address_create_post");
},

// GET request to call form to delete address on post request
address_delete_get : function (req, res) {
    res.send('NOT IMPLEMENTED: address delete GET');
},
// POST request to delete address on post request
address_delete_post : function (req, res) {
    res.send('NOT IMPLEMENTED: address delete POST');
},
// GET request to call form to update address on post request
address_update_get : function (req, res) {
    res.send('NOT IMPLEMENTED: address update GET');
},
// POST request to update an new address from body and save it to db
address_update_post : function (req, res) {
    res.send('NOT IMPLEMENTED: address update POST');
},

};

module.exports = AddressController;