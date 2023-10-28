import asyncHandler from 'express-async-handler';
import {User} from '../models/userDB.js';
import {Ratings} from '../models/ratingsDB.js';
import {Reviews} from '../models/reviewsDB.js';
// const bcrypt = require('bcrypt');

const createUser = asyncHandler ( async (req, res) => {
    try{
        const {fullName, email, phone, dob} = req.body;
        const parsedDob = new Date(dob);
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            fullName: fullName,
            email: email,
            phone: phone,
            dob: parsedDob
        })
        res.status(200).json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

const getUser = asyncHandler (async (req, res) => {
    const fullName = req.query.fullName;
    try {
        const user = await User.findOne({fullName: fullName});
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    } catch(err) {
        res.status(404).json(err);
    }
})

const updateUser = asyncHandler (async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Update successfully!");
        } catch(err) {
            res.status(500).json(err);
        }
    }
})

const deleteUser = asyncHandler (async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const user = await User.findOneAndDelete(req.params.id);
            res.status(200).json("Account has been deleted.");
        } catch(err) {
            res.status(500).json(err);
        }
    }
    else{
        return res.status(403).json("You can delete only your account.");
    }
})

const giveRating = asyncHandler (async (req, res) => {
    try {
        const {userId, rating} = req.body;
        const lawyerId = req.params.id;
        const newRating = await Ratings.create({
            userId: userId,
            lawyerId: lawyerId,
            rating: rating
        });
        res.status(200).json(newRating);
    } catch(err) {
        res.status(500).json(err);
    }
})

const giveReview = asyncHandler (async (req, res) => {
    try {
        const {userId, review} = req.body;
        const lawyerId = req.params.id;
        const newReview = await Reviews.create({
            userId: userId,
            lawyerId: lawyerId,
            review: review
        });
        res.status(200).json(newReview);
    } catch(err) {
        res.status(500).json(err);
    }
})

export {createUser, getUser, updateUser, deleteUser, giveRating, giveReview};