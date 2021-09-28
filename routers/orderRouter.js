import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'
import order from '../module/ordermodule.js'

var transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    port:  465,
    secure: true,
    auth: {
      user: 'hernandezpharel@gmail.com',
      pass: 'lanyoestate'
    }
  });

const orderRouter = express.Router()

orderRouter.post('/getorder', expressAsyncHandler(async (req, res) => {
    let cartItems = req.body.cartItems
    let shippingDetails = req.body.shippingDetails
    let paymentmethod = req.body.paymentmethod
    const mailOptions = {
        from: 'pharelsimons@gmail.com',
        to: req.body.shippingDetails.email,
        subject: 'Thanks For Shopping With Us',
        html: `  <div class="products-container" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;border-width:0.3px;border-style:solid;border-color:rgb(214, 212, 212);width:90%;margin-top:a;margin-bottom:a;margin-right:a;margin-left:a;" >
        <h2 class="center" style="text-align:center;" >Order Preview</h2>
        <p class="center" style="text-align:center;" >just a preview of your order</p>
        <p>Your Order (1234567888)</p>
        <div class="cartItems" style="display:grid;grid-auto-flow:row;" > 
                    ${
                        cartItems.map(item => {
                        `<div class="cartItem" style="background-attachment:scroll;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:6px;background-color:rgb(250, 250, 243);background-image:none;background-repeat:repeat;background-position:top left;border-top-width:0.0001px;border-top-style:solid;border-top-color:rgb(204, 202, 202);height:100px;" >
                            <img class="img" src=${item.image} alt="" style="height:80px;width:100px;grid-column:1/ 3;margin-top:auto;margin-bottom:auto;margin-right:auto;margin-left:auto;" ></img>
                                <div class="description" style="grid-column:3 /7;margin-left:10px;display:flex;flex-direction:column;justify-content:center;" >
                                <h3 style="margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px;font-weight:bold;">${item.name}<small>(option)</small></h3>
                                </div>
                            <p class="cartItem-total" style="margin-top:auto;margin-bottom:0px;margin-right:0px;color:#008;" >${item.price.toFixed(2)} x ${item.qty} = ${"  "} $${(item.price * item.qty ).toFixed(2)}</p>
                        </div>`
                        })
                    }
        </div>
      <hr/>
        <div class="section-divider-center" style="display:flex;justify-content:space-around;flex-wrap:wrap;" >
            <div style="line-height:2px;" >
                <h3>Shipping Address</h3>
                <p>Country:  ${shippingDetails.country}</p>
                <p>Address:  ${shippingDetails.address}</p>
                <p>Zip:  ${shippingDetails.zip}</p>
                <p>name:  ${shippingDetails.name}</p>
                <p>contact:  ${shippingDetails.phoneNumber}</p>
            </div>
            <div style="line-height:2px;" >
                <h3>Details</h3>
                <p>Subtotal: <span style="color:#008;" >${cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}</span></p>
                <p>Standard Shipping: <span style="color:#008;" >$10.00</span></p>
            </div>
        </div>
      <hr/>
        <div class="section-divider" style="display:flex;justify-content:center;" >
            <div>
                <p>Order Total</p>
                <h3 style="line-height:2px;" ><span style="color:#008;">${(cartItems.reduce((a, c) => a + c.price * c.qty, 0) + 10).toFixed(2)}</span></h3>
            </div>
        </div>
      <hr/>
        <div class="section-divider" style="display:flex;justify-content:center;" >
            <div>
                <p>PAYMENT METHOD</p>
                <h3 style="line-height:2px;" ><span style="color:#008;" >${paymentmethod}</span></h3>
            </div>
        </div>
      </div>`
      }

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })

      
      const neworder = new order({
        cartItems ,
        shippingDetails ,
        paymentmethod
      })
      
      const ordersent = await neworder.save()
      
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