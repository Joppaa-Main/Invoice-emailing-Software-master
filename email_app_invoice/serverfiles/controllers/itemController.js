const dbasync = require("async");
const { body, validationResult } = require('express-validator');
var Account = require('../models/userAccount');
var Item = require('../models/itemModel');



let ItemController = {
    // Display list of all items.
    item_list: async function (req, res) {
        body('name', 'the  name field required').trim().isLength({ min: 1 }).escape();
      await  Item.find({},)
            .sort({ name: 1 })
            .populate('user')
            .exec(function (err, list_items) {
                if (err) { return next(err); }
                //Successful, so render should happen 
                res.render('itemsview', { title: 'Items list', item_list: list_items });
                // console.log(list_items);
            });
    },
    // Display detail page for a specific item.
    item_detail: async function (req, res, next) {
        item = await Item.findById({ '_id': req.params.id,});
        // console.log(detail);
        res.render('itemdetail', { title: 'Item Detail', details: item});
    },
    // GET request to create a new item form to be save db on submit
    item_create_get: async function (req, res, next) {
        // validate error if name is missing
        body('name', 'the  name field required')
            .trim().isLength({ min: 1 }).escape();
        const errors = validationResult(req);
        user = await Account.find();
        console.log(user);
        res.render('item_form', { title: 'Add New Item', _users: user, errors: errors.array() });
    },
    // POST request to create a new item from body and save it to db
    item_create_post: async function (req, res, next) {
        const errors = validationResult(req);
        allitems = await Item.find({}, 'name')
        .sort({ name: 1 })
        .populate('user');
        user = await Account.find();
        var item = new Item({
            type: req.body.type,
            name: req.body.name,
            unit: req.body.unit,
            sellingprice: req.body.sellingprice,
            description: req.body.description,
            user: req.body.user,
        });
        Item.findOne({ 'name': req.body.name })
            .exec(function (err, founditem) {
                if (err) { return next(err); }
                if (founditem) {
                    res.redirect(founditem.url);
                }
                else {
                    item.save(function (err) {
                        if (err) { return next(err); }
                        
                        res.render('newinstance', { title: 'Successfully Created item', _item: item, items: allitems,errors: errors.array() });
                    });
                }
            })
    },
    // GET request to call form to delete item on post request
    item_delete_get: async function (req, res) {
               item =  await Item.findById(req.params.id);
            res.render('item_delete', { title: 'Delete an item', item : item });
    },
    // POST request to delete item on post request
    item_delete_post: async function (req, res) {
        item =  await Item.findById(req.body.id);
         Item.findByIdAndRemove(req.body.itemid, function deleteitem(err) {
            if (err) { return next(err); }
        });
        res.redirect('http://localhost:3000/items/all')
    },
    // GET request to call form to update item on post request
    item_update_get: async function (req, res) {
        item =  await Item.findById(req.params.id);
        user = await Account.find();
        res.render('update_item_form', { title: 'Update an item', item : item ,_users: user});
    },
    // POST request to update an new item from body and save it to db
    item_update_post:  async function (req, res) {
    // Validate and sanitize fields.
    // body('sellingprice', 'sellingprice must not be string.').trim().isLength({ min: 1 }).escape();
    //     const errors = validationResult(req);
        user = await Account.find();
        item =  new Item({ type: req.body.type,
            name: req.body.name,
            unit: req.body.unit,
            sellingprice: req.body.sellingprice,
            description: req.body.description,
            _id:req.params.id
        });
        Item.findByIdAndUpdate (req.params.id,item, {}, 
            function (err,newitem) { 
            if (err) {  
                return next(err)}
    });
    res.render('itemdetail', { title: 'Item Detail', details: item}); 
    },
};

module.exports = ItemController;