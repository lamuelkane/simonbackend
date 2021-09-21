import mongoose from "mongoose";


const orderschema = new mongoose.Schema({
    cartItems: {type: Array, required: true},
    shippingDetails: {type: Object, required: true},
    paymentmethod:{type:String, required:true},
    status:{type:String, default:'sent'}, 
},{
    timestamps: true
})

const order = mongoose.model("order", orderschema);
export default order;