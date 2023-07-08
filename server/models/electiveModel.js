//Allow user to add, update, delete an elective subject

const mongoose = require('mongoose');
const User = require('./userModel');


const electiveSchema = new mongoose.Schema({ 
    subject: {
        type: String,
        required: [true, 'Please enter the subject'],
        trim: true,
        unique:true,
        maxLength: [100, 'Subject cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter the description'],
        trim: true,
        maxLength: [1000, 'Description cannot exceed 1000 characters']
    },
    code: {
        type: String,
        required: true,
      },
    rating: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: 'User',
    //             required: true
    //         },
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         rating: {
    //             type: Number,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

// Create a unique index on the combination of user and subject fields
electiveSchema.index({ user: 1, subject: 1 }, { unique: true });


// // Calculating rating and number of reviews
// electiveSchema.methods = {
//     async calculateRating() {
//         const reviews = await Review.find({ elective: this._id })
//         let rating = 0;
//         if (reviews.length === 0) {

//         } else {
//             reviews.forEach(review => {
//                 rating += review.rating
//             })
//             this.rating = Math.floor(rating / reviews.length)
//         }
//         await this.save({ validateBeforeSave: false })
//     }
// }

module.exports = mongoose.model('Elective', electiveSchema);