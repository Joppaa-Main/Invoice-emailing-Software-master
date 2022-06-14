const { body,validationResult } = require('express-validator');
var Expense = require('../models/expenseModel');

let ExpenseController = {
// Display list of all expenses.
expense_list : async function  (req, res,next) {
    body('name', 'the  name field required').trim().isLength({ min: 1 }).escape();
    await   Expense.find({},)
        .sort({ name: 1 })
        .exec(function (err, list_expenses) {
            if (err) { return next(err); }
            //Successful, so render should happen 
            res.render('expense', { title: ' Expenses list', expense_list: list_expenses });
            // console.log(list_expenses);
        });
},
// Display detail page for a specific expense.
expense_detail : async function (req, res,next) {
     res.send('NOT IMPLEMENTED: expense detail: ' + req.params.id);
},
// GET request to create a new expense form to be save db on submit
expense_create_get : function (req, res,next) {
    res.send('NOT IMPLEMENTED: Yet');
},
// POST request to create a new expense from body and save it to db
expense_create_post : async function (req, res) {
    console.log("You're about to create new Expense");
    var createdExpense = await addinstancetodb({
        expensedate:  req.body.expensedate,
        categoryname:req.body.categoryname,
        expenseamount:req.body.expenseamount,
        projectreference:req.body.projectreference,
        expensenotes:req.body.expensenotes,
        purchasename:req.body.purchasename,
        paymentmethod:req.body.paymentmethod,
        user:req.body.user,
    }, Expense).catch(err => {
        console.log({ message: err.message });
    });
    res.json("\n>> Created New Expense :\n" + createdExpense);
    console.log("executed create Expense_create_post");
},
// GET request to call form to delete expense on post request
expense_delete_get : function (req, res) {
    res.send('NOT IMPLEMENTED: expense delete GET');
},
// POST request to delete expense on post request
expense_delete_post : function (req, res) {
    res.send('NOT IMPLEMENTED: expense delete POST');
},
// GET request to call form to update expense on post request
expense_update_get : function (req, res) {
    res.send('NOT IMPLEMENTED: expense update GET');
},
// POST request to update an new expense from body and save it to db
expense_update_post : function (req, res) {
    res.send('NOT IMPLEMENTED: expense update POST');
},

};

module.exports = ExpenseController;