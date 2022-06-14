const { body, validationResult } = require('express-validator');
var Customer = require('../models/customerModel');
var Account = require('../models/userAccount');
var User = require('../models/userModel');
// const db = require('../models');


let CustomerController = {
    // Display list of all customers.
    customer_list: async function (req, res,next) {
        body('name', 'the  name field required').trim().isLength({ min: 1 }).escape();
        await   Customer.find({},)
            .sort({ _id: 1 })
            .populate('locations')
            .exec(function (err, list_customers) {
                if (err) { return next(err); }
                //Successful, so render should happen 
                res.render('customers', { title: ' Customers list', customers_list: list_customers });
                // console.log(list_customer);
            });
    },
    // Display detail page for a specific customer.
    customer_detail: async function (req, res, next) {
        res.send('NOT IMPLEMENTED: customer detail: ' + req.params.id);
    },
    // GET request to create a new customer form to be save db on submit
    customer_create_get: function (req, res, next) {
        res.send('NOT IMPLEMENTED: Yet');
    },
    // POST request to create a new customer from body and save it to db
    customer_create_post: async function (req, res) {
        // console.log("You're about to create new customer");
        var createdCustomer = await addinstancetodb({
            type: req.body.type,
            prefix: req.body.prefix,
            firstname: req.body.firstname,
            lastname: req.body.last,
            companyname: req.body.companyname,
            displayname: req.body.displayname,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
            remarks: req.body.remarks,
            paymentterms: req.body.paymentterms,
            allowportalaccess: req.body.allowport,
            preferedlanguage: req.body.preferedlanguage,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            Location: req.body.locationid
        }, Customer).catch(err => {
            // console.log({ message: err.message });
        });
        res.json("\n>> Created New Customer :\n" + createdCustomer);
        // console.log("executed create customer_create_post");
    },
    // GET request to call form to delete customer on post request
    customer_delete_get: function (req, res) {
        res.send('NOT IMPLEMENTED: customer delete GET');
    },
    // POST request to delete customer on post request
    customer_delete_post: async function (req, res) {

    },
    // GET request to call form to update customer on post request
    customer_update_get: function (req, res) {
        res.send('NOT IMPLEMENTED: customer update GET');
    },
    // POST request to update an new customer from body and save it to db
    customer_update_post: function (req, res) {
        res.send('NOT IMPLEMENTED: customer update POST');
    },

};

module.exports = CustomerController;