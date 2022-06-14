
const { body, validationResult } = require('express-validator');
var Invoice = require('../models/invoiceModel');
var User = require('../models/userModel');
var Item = require('../models/itemModel');
var Account = require('../models/userAccount');
var Customer = require('../models/customerModel');

//get all items

    
let InvoiceController = {

    index: async function (req, res) {
        res.send('NOT IMPLEMENTED: Site Home Page');
    },
    //Display list of all invoice
    invoice_list: async function (req, res,next) {
        body('name', 'the  name field required').trim().isLength({ min: 1 }).escape();
        await  Invoice.find({},)
            .sort({ invoicenumber: 1 })
            .exec(function (err, list_invoices) {
                if (err) { return next(err); }
                //Successful, so render should happen 
    
                res.render('invoice', { title: 'invoices list', invoice_list: list_invoices });
            });
            },
    //Display detail page for a specific User
    invoice_detail: async function (req, res) {
        invoice = await Invoice.findById({ '_id': req.params.id});
        // console.log(invoice);
        res.render('invoicedetail', { title: 'INVOICE : ', invoice_listed: invoice});

    },
    //Display invoice create form on GET request
    invoice_create_get: async function (req, res) {
        // validate error if name is missing
        body('name', 'the  name field required')
            .trim().isLength({ min: 1 }).escape();
        customers = await Customer.find();
        items = await Item.find();
        const errors = validationResult(req);
        invoice = await Invoice.find();
        // console.log(invoice);
        res.render('invoice_form', { title: 'Add New Invoice', _invoices: invoice, _customers: customers, details : items, errors: errors.array() });
    },
    // POST request to create a new invoice from body and save it to db
    invoice_create_post: async function (req, res,next) {
        body('items', 'items are required').trim().isLength({ min: 1 }).escape(),
        console.log("You're about to create new invoice");
        const errors = validationResult(req);
        allinvoices = await Invoice.find({}, 'invoicenumber')
        .sort({ invoicenumber: 1 })
        .populate('items');
        customers = await Customer.find();
        var invoice = new Invoice({
            invoicenumber: req.body.invoicenumber,
            ordernumber: req.body.ordernumber,
            invoicedate: req.body.invoicedate,
            paymentterms: req.body.paymentterms,
            duedate: req.body.duedate,
            salesperson: req.body.salesperson,
            subject: req.body.subject,
            items: req.body.items,
            discount: req.body.discount,
            paid: req.body.paid,
            customernotes: req.body.customernotes,
            termsandConditions: req.body.termsandConditions,
            customer: req.body.customer,
            user: req.body.user,
        });
        Invoice.findOne({ 'invoicenumber': req.body.name })
            .exec(function (err, foundinvoice) {
                  if (err) { return next(err); }
                  if (foundinvoice) {
                res.redirect(foundinvoice.url);
                  }
                  else{
                       invoice.save(function (err) {
                              if (err) { return next(err); }
                              res.redirect('/invoices/' + invoice.url);
                });
            }
        })
     
        console.log("executed create invoice_create_post");
    },
    // GET request to call form to delete invoice on post request
    invoice_delete_get: async function (req, res) {
        res.send('NOT IMPLEMENTED: Invoice delete GET');
    },
    //Handle User delete on Post request.
    invoice_delete_post: async function (req, res) {
        res.send('NOT IMPLEMENTED: Invoice delete POST');
    },
    // GET request to call form to update invoice on post request
    invoice_update_get: async function (req, res) {
        res.send('NOT IMPLEMENTED: Invoice update GET');
    },
    // POST request to update an new invoice from body and save it to db
    invoice_update_post: async function (req, res) {
        res.send('NOT IMPLEMENTED: Invoice update POST');
    }
};//end of controller
module.exports = InvoiceController;