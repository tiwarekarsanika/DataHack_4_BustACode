import express from 'express';
import {createUser, getUser, updateUser, deleteUser, giveRating, giveReview} from '../controllers/userController.js';

const router = express.Router();
router.route('/register').post(createUser);
router.route('/').get(getUser);
router.route('/:id').put(updateUser).delete(deleteUser);
router.route('/rate/:id').post(giveReview)
router.route('/review/:id').post(giveRating);

export default router;