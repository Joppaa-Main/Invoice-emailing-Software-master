var express = require('express');

var router = express.Router();
var ExpenseController = require('../controllers/expenseController');



router.get('/all',  ExpenseController.expense_list);
router.get('/createnew', ExpenseController.expense_create_get);
router.get('/expense', ExpenseController.expense_detail);
router.post('/createnew',ExpenseController.expense_create_post);
// router.update('/expense/:id/update', expenseController.expense_update_get);
router.delete('/expense/:id/delete', ExpenseController.expense_delete_get);
// specific routes with id
router.get('/expense/:id/delete', ExpenseController.expense_delete_get);
router.post('/expense/:id/delete',ExpenseController.expense_delete_post);
router.get('/expense/:id/update', ExpenseController.expense_update_get);
router.post('/expense/:id/update',ExpenseController.expense_update_post);
router.get('/expense/:id', ExpenseController.expense_detail);






module.exports = router;
