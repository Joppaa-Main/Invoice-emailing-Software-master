var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');

// /* View users  */
// router.get('/', UserController.viewUsers);

router.get('/all',  UserController.users_list);
router.get('/createnew', UserController.users_create_post);
// router.get('/user', UserController);
router.post('/createnew',UserController.users_create_post);
// router.get('/user/:id/delete', UserController);
// router.post('/user/:id/delete',UserController);
// router.get('/user/:id/update', UserController);
// router.post('/user/:id/update',UserController);
// router.get('/user/:id', UserController);





module.exports = router;
