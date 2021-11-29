import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'
import order from '../module/ordermodule.js'

var transporter = nodemailer.createTransport({
  // service: 'smtp.live.com',
  host: 'smtp.live.com',
  auth: {
    user: 'releifweed420@outlook.com',
    pass: 'lanyoestate1'
  },
  port: 587
});

const orderRouter = express.Router()

orderRouter.post('/getorder', expressAsyncHandler(async (req, res) => {
    let cartItems = req.body.cartItems
    let shippingDetails = req.body.shippingDetails
    let paymentmethod = req.body.paymentmethod

    const neworder = new order({
      cartItems ,
      shippingDetails ,
      paymentmethod
    })

    const ordersent = await neworder.save()

    const mailOptions = {
        from: 'releifweed420@outlook.com',
        to: `${req.body.shippingDetails.email}, releifweed420@outlook.com`,
        subject: 'Order Received',
        html: ` <div style='padding: 30px; '>
          <p style="width: 90%; max-width: 400px; color: white;><center>
          Hello ${req.body.shippingDetails.name} you received this email to let 
          you know that we have received your order and to say we are grateful to you for
           choosing to shop with us. You will receive another email from us letting you 
           know how to go on from here.
                below are the details of your Order...
          </center></p>

        <div class="w-50 w-s-90 margin-auto" style="width: 90%; max-width: 400px; margin: auto; background-color: white;">
        <div class="products-container" style="padding: 10px; border: 0.3px solid rgb(214, 212, 212); width: 100%;">
            <div class="main-bg white padding" style="background-color: rgb(10, 27, 10); color: white; padding: 15px;">
                <h2 class="center" style="text-align: center;">Order Details</h2>
                <p class="center" style="text-align: center;">Detials of your order # ${neworder._id}</p>
            </div>
        <p>Your Order </p>
  <div class="margin-bottom" style="margin-bottom: 30px;">
                <h3>Shipping Address</h3>
                <div><b>Country</b>:${shippingDetails.country}</div>
                <div><b>City</b>:${shippingDetails.city}</div>
                <div><b>Address</b>:${shippingDetails.address}</div> 
                <div><b>Zip</b>:${shippingDetails.zip}</div>
                <div><b>Name</b>:${shippingDetails.name}</div>
                <div><b>Contact</b>:${shippingDetails.phonenumber}</div>
            </div>
        <table class="cartItems" style="width: 100%; display: block;" width="100%"> 
                <hr>
                ${
                  cartItems.map(item => (
                    `<tr>
                    <td class="td1"><img src=${item.image} alt="" style="height: 60px; width: 60px;" width="60" height="60"></td>
                    <td class="td2" style="width: 250px; max-width: 15%; text-align: center;" width="250" align="center">${item.name}</td>
                    <td class="td3" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$${item.price}</td>
                    <td class="td4" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">${item.amount}</td>
                    <td class="td5" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$${item.amount * item.price}</td>
                </tr>`  
                  ))
                }
        </table>
        <hr>
        <div class="ifo">
            
            <div class="center" style="text-align: center;">
                <h3>Details</h3>
                <div><b>Subtotal</b>: <span>$${cartItems.reduce((a, c) => a + c.price * c.amount, 0)}</span></div>
                <div><b>Shipping</b>: <span>$${cartItems.reduce((a, c) => a + c.price * c.amount, 0) * 15/100}</span></div>
            </div>
        </div>
        <hr>
        <div class="section">
            <div>
                <p class="order-totaltext" style="color: rgb(10, 27, 10); text-align: center;">Order Total</p>
                <h3 class="order-total" style="text-align: center;">$${(cartItems.reduce((a, c) => a + c.price * c.amount, 0) * 20/100) + (cartItems.reduce((a, c) => a + c.price * c.amount, 0))}</h3>
            </div>
        </div>
        <hr>
        <div class="section-dividr">
            <div>
                <h3 class="order-total" style="text-align: center;"><small>Payment With ${paymentmethod}</small></h3>
            </div>
            <div>
                <h3 class="order-total" style="text-align: center;">Thanks for shopping at <a href='releifweed420.com' style="color: blue; ">releifweed420</a> Your top marijuana dispensary</h3>
            </div>
        </div>
    </div>
    
    </div> </div>
   
  
  <style>
  @media screen and (max-width: 768px) {
  .w-s-90 {
  width: 90% !important;
  }
  }
  </style>`
      }

      transporter.sendMail(mailOptions).then(console.log('email sent')).catch((err) => console.log(err))
      res.send({
        ordersent,
        message: ' email may have been sent'
      })
}))




orderRouter.get('/',  expressAsyncHandler(async (req, res) => {
   const orders = await order.find({})
   res.json(orders)
}))

export default orderRouter