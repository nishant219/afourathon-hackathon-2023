const express=require('express');
const router=express.Router();
const {isLoggedIn}=require('../middlewares/isLoggedIn');

// const {getElectives,addElective,updateElective,deleteElective,getElective}=require('../controllers/electiveController');
const {addElective , getAllElectives, getElective, deleteElective, updateElective }=require('../controllers/electiveController');

// router.route('/').get(getElectives).post(addElective);
// router.route('/').post(addElective);
// router.route('/:id').get(getElective).put(updateElective).delete(deleteElective);
router.route('/add').post(isLoggedIn,addElective);
router.route('/').get(isLoggedIn,getAllElectives);
router.route('/:id').get(isLoggedIn,getElective);
router.route('/delete/:id').delete(isLoggedIn,deleteElective);
router.route('/update/:id').put(isLoggedIn,updateElective);

module.exports=router;
