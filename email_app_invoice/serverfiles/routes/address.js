var express = require('express');
var router = express.Router();
var AddressController = require('../controllers/addressController');

// /* View addresss  */
// router.get('/', AddressController.viewaddresss);

router.get('/all',  AddressController.address_list);
router.get('/createnew', AddressController.address_create_get);
// router.get('/address', addressController);
router.post('/createnew',AddressController.address_create_post);
// router.get('/address/:id/delete', AddressController);
// router.post('/address/:id/delete',AddressController);
// router.get('/address/:id/update', AddressController);
// router.post('/address/:id/update',AddressController);
// router.get('/address/:id', AddressController);





module.exports = router;