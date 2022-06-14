const dbasync = require("async");
const { body, validationResult } = require('express-validator');
var User = require('../models/userModel');
var Item = require('../models/itemModel');


async function getUser (){
const user =  await User.find()
return user;
}
async function getItem (){
    const item =  await Item.find();
    return item;
    }
 async function listAllItems(){
    list_items = await getItem();
  return list_items;
} 


//   itemdetail = await Item.find({
//         '_id': req.body.id,
//     });
//     // console.log(detail);
//     // console.log(req.body);
//     res.json(itemdetail);


// body('name', 'the  name field required').trim().isLength({ min: 1 }).escape();

// const errors = validationResult(req);

// newuser = await User.find();
// console.log(newuser);
// res.render('item_form', { title: 'Create Title', _users:newuser, errors: errors.array() });



// // const errors = validationResult(req);
// newuser = await User.find();
// var item = new Item({
//     type: req.body.type,
//     name: req.body.name,
//     unit: req.body.unit,
//     sellingprice: req.body.sellingprice,
//     description: req.body.description,
//     user: req.body.user,
//     });
//     Item.findOne({ 'name': req.body.name })
//         .exec(function (err, founditem) {
//             if (err) { return next(err); }
//             if (founditem) {
//                 res.redirect(founditem.url);
//             }
//             else {
//                 item.save(function (err) {
//                     if (err) { return next(err); }
                
//                 });
//             }
//         })
//         res.render('item_form', { title: 'Create Title', _users:newuser, errors: errors.array() });
// },

// }