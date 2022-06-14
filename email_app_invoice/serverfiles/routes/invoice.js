var express = require('express');

var router = express.Router();
var InvoiceController = require('../controllers/InvoiceController');



router.get('/all',  InvoiceController.invoice_list);
router.get('/createnew', InvoiceController.invoice_create_get);
router.post('/createnew',InvoiceController.invoice_create_post);
router.get('/invoice/:id', InvoiceController.invoice_detail);
// router.update('/invoice/:id/update', invoiceController.invoice_update_get);
router.delete('/invoice/:id/delete', InvoiceController.invoice_delete_get);
// specific routes with id
router.get('/invoice/:id/delete', InvoiceController.invoice_delete_get);
router.post('/invoice/:id/delete',InvoiceController.invoice_delete_post);
router.get('/invoice/:id/update', InvoiceController.invoice_update_get);
router.post('/invoice/:id/update',InvoiceController.invoice_update_post);
router.get('/invoice/:id', InvoiceController.invoice_detail);

module.exports = router;