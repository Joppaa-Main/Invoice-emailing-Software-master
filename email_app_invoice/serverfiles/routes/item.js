var express = require('express');

var router = express.Router();
var ItemController = require('../controllers/itemController');



router.get('/all',  ItemController.item_list);
router.get('/createnew', ItemController.item_create_get);
router.get('/item/:id', ItemController.item_detail);
router.post('/createnew',ItemController.item_create_post);
// router.update('/item/:id/update', ItemController.item_update_get);
router.delete('/item/:id/delete', ItemController.item_delete_get);
// specific routes with id
router.get('/item/:id/delete', ItemController.item_delete_get);
router.post('/item/:id/delete',ItemController.item_delete_post);
router.get('/item/:id/update', ItemController.item_update_get);
router.post('/item/:id/update',ItemController.item_update_post);
router.get('/item/:id', ItemController.item_detail);





module.exports = router;
