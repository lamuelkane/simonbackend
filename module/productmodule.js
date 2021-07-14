import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:{type: String, required: true, unique: false},
    image:{type: String},
    img:{},
    category: {type: String, required: true},
    description: {type: String, default:"No Description Available"},
    price:{type:Number, required:true},
    countInStock:{type:Number, required:true}, 
    rating:{type:Number, required:false, default:0},
    numReviews:{type:Number, required:false, default:0},
    options:{type:Array, required:false},
    numOrders:{type: Number, default: 0}, 
    lastlyOrdered:{type: String, default: "0"},
    lastlyreviewed:{type: String, default: "0"},
    numviews:{type: Number, default: 0}
},{
    timestamps: true
})

const categorySchema = new mongoose.Schema({
    category:{type: String}
})

const productsimageSchema = new mongoose.Schema({
    image:{type: {}}
})


const product = mongoose.model("Product", productSchema);
export const category = mongoose.model("category", categorySchema)
export const productsimage = mongoose.model('image', productsimageSchema)
export default product;