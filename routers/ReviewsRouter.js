import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { generateToken } from '../utils.js'
import PeoductReviews, { UserReview } from "../module/Reviews.js";
import product from '../module/productmodule.js'

const ReviewRouter = express.Router()

ReviewRouter.post('/insertproductreview', expressAsyncHandler(async (req, res) => {
    const review = new PeoductReviews({
        name: req.body.name,
        email: req.body.email,
        ProductId: req.body.productId,
        rating: req.body.rating,
        review: req.body.review,
        })
    const productReview = await review.save()
    res.send({
        _id: productReview._id,
        name: productReview.name,
        email: productReview.email,
        ProductId: productReview.ProductId,
        rating: productReview.rating,
        review: productReview.review,
        token: generateToken(productReview)
    })
}))

ReviewRouter.get('/productreview', expressAsyncHandler(async (req, res) => {
//    await PeoductReviews.remove({})
    console.log("received reqests")
    const productsreviews = await PeoductReviews.find({})
    const prodreviews = productsreviews
    res.send( prodreviews );
}))

ReviewRouter.post('/updateproductreview', expressAsyncHandler(async (req, res) => {
    console.log("post received")
    const review = {
        name: req.body.name,
        email: req.body.email,
        ProductId: req.body.ProductId,
        rating: req.body.rating,
        review: req.body.review,
        approved: req.body.approved
        } 
    const ProductPrev = await product.findById(req.body.ProductId)
    console.log(ProductPrev)
    if (req.body.approved === true) {
        if (ProductPrev.numReviews < 1) {
            ProductPrev.rating = review.rating
            ProductPrev.numReviews = 1
            
        }
        else{
        ProductPrev.rating = ((ProductPrev.rating * ProductPrev.numReviews) + review.rating) / (ProductPrev.numReviews + 1)
        ProductPrev.numReviews = ProductPrev.numReviews + 1
        }
    }
    else{
        if (ProductPrev.numReviews === 1) {
            ProductPrev.rating = 0
            ProductPrev.numReviews = 0
        }
        else{
        ProductPrev.rating = ((ProductPrev.rating * ProductPrev.numReviews) - review.rating) / (ProductPrev.numReviews - 1)
        ProductPrev.numReviews = ProductPrev.numReviews - 1
        }
    }
    ProductPrev.lastlyreviewed = new Date()
      let updatedReview = await PeoductReviews.updateOne({_id: req.body._id}, review, (err, res) =>  {
        if (err) throw err;
        console.log("1 review updated");
      })
      let updatedProduct = await product.updateOne({_id: req.body.ProductId}, ProductPrev, (err, res) =>  {
        if (err) throw err;
        console.log("1 product updated");
      })
    res.send({ProductPrev, updatedReview, review})
}))

ReviewRouter.post('/insertreview', expressAsyncHandler(async (req, res) => {
    const review = new UserReview({
        name: req.body.name,
        email: req.body.email,
        review: req.body.review
        })
    const userReview = await UserReview.save()
    res.send({
        _id: userReview._id,
        name: userReview.name,
        email: userReview.email,
        review: userReview.review,
        token: generateToken(userReview)
    })
}))

ReviewRouter.get('/userreview', expressAsyncHandler(async (req, res) => {
    console.log("received reqest")
    const reviews = await UserReview.find({})
    res.send({ reviews });
}))

export default ReviewRouter