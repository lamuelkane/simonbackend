import mongoose from "mongoose";


const ProductReviewsScheama = new mongoose.Schema({
    rating: {type: Number, required: true, default: 5},
    review:{type: String, required: true, },
    ProductId: {type: String, required: true},
    name: {type: String, required: true,},
    email: {type: String, required: true,},
    approved: {type: Boolean, default: false,},

},{
    timestamps: true
})

const PeoductReviews = mongoose.model("PeoductReviews", ProductReviewsScheama);

 
const UserReviewScheama = new mongoose.Schema({
    review:{type: String, required: true, },
    name: {type: String, required: true,},
    email: {type: String, required: true,},
},{
    timestamps: true
})

export const UserReview = mongoose.model("UserReview", UserReviewScheama);

export default PeoductReviews
