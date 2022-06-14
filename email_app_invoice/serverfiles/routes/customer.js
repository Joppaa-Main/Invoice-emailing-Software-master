var express = require('express');

var router = express.Router();
var CustomerController = require('../controllers/CustomerController');



router.get('/all',  CustomerController.customer_list);
router.get('/createnew', CustomerController.customer_create_get);
router.get('/customer', CustomerController.customer_detail);
router.post('/createnew',CustomerController.customer_create_post);
// router.update('/customer/:id/update', customerController.customer_update_get);
router.delete('/customer/:id/delete', CustomerController.customer_delete_get);
// specific routes with id
router.get('/customer/:id/delete', CustomerController.customer_delete_get);
router.post('/customer/:id/delete',CustomerController.customer_delete_post);
router.get('/customer/:id/update', CustomerController.customer_update_get);
router.post('/customer/:id/update',CustomerController.customer_update_post);
router.get('/customer/:id', CustomerController.customer_detail);






module.exports = router;
