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
        html: ` <!DOCTYPE html>

        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        <head>
        <title></title>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
        <!--<![endif]-->
        <style>
            * {
              box-sizing: border-box;
            }
        
            body {
              margin: 0;
              padding: 0;
            }
        
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
        
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
        
            p {
              line-height: inherit
            }
        
            @media (max-width:670px) {
              .icons-inner {
                text-align: center;
              }
        
              .icons-inner td {
                margin: 0 auto;
              }
        
              .row-content {
                width: 100% !important;
              }
        
              .stack .column {
                width: 100%;
                display: block;
              }
            }
          </style>
        </head>
        <body style="background-color: #F5F5F5; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F5F5F5;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: rgb(10, 27, 10); background-image: url('https://releifweed420.com/assets/images/logo.png'); background-position: top center; background-repeat: no-repeat; color: #000000; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 55px; padding-bottom: 60px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:5px;padding-left:15px;padding-right:10px;padding-top:20px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #052d3d; line-height: 1.2;">
        <p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:26px;"><strong><span style="color: white;">Thanks for shopping at <a href="https://releifweed420.com" rel="noopener" style="text-decoration: none; color: #0068A5;" target="_blank">releifweed420.com</a></span></strong></span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #052D3D; line-height: 1.2;">
        <p style="margin: 0; font-size: 14px; text-align: center;"><span style="font-size:18px;color:#ffffff;"><span style="">Hello ${shippingDetails.name}, you receiveed this email to let you know that we have received your order and you will get another email from us letting you know how to proceed from here</span></span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #000000; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 15px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td>
        <div style="font-family: sans-serif">
          <div class="main-bg white padding" style="background-color: rgb(10, 27, 10); color: white; padding: 15px;">
            <h2 class="center" style="text-align: center;">Order Details</h2>
            <p class="center" style="text-align: center;">Detials of your order # ${neworder._id}</p>
          </div>
        <!-- <p>Your Order </p> -->
          <div class="margin-bottom" style="margin-bottom: 30px;">
            <h3>Shipping Address</h3>
            <div><b>Country</b>:${shippingDetails.country}</div>
            <div><b>City</b>:${shippingDetails.city}</div>
            <div><b>Address</b>:${shippingDetails.address}</div> 
            <div><b>Zip</b>:${shippingDetails.zip}</div>
            <div><b>Name</b>:${shippingDetails.name}</div>
            <div><b>Contact</b>:${shippingDetails.phonenumber}</div>
          </div>
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #052d3d; line-height: 1.2;">
        <!-- <p style="margin: 0; text-align: center; font-size: 12px;"><span style="font-size:20px;">Order Details:</span></p> -->
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F8F8F8; color: #333; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-right: 0px solid #E8E8E8; border-top: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
        <p style="margin: 0; font-size: 14px; text-align: center;"><strong>ITEM</strong></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-right: 1px dotted #E8E8E8; border-top: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
        <div class="spacer_block" style="height:45px;line-height:5px;font-size:1px;"> </div>
        </td>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-right: 1px dotted #E8E8E8; padding-left: 15px; padding-right: 15px; border-top: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
        <p style="margin: 0; font-size: 14px; text-align: center;"><strong>QTY</strong></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
        <p style="margin: 0; font-size: 14px; text-align: center;"><strong>PRICE</strong></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <tbody>
        <tr>
        <td>
          ${
                    cartItems.map(item => (
                      `<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                      <tbody>
                      <tr>
                      <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F9F9F9; color: #333; width: 650px;" width="650">
                      <tbody>
                      <tr>
                      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                      <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                      <tr>
                      <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:5px;">
                      <div align="center" style="line-height:10px"><img alt="Image" src=${item.image} style="display: block; height: auto; border: 0; width: 130px; max-width: 100%;" title="Image" width="130"/></div>
                      </td>
                      </tr>
                      </table>
                      </td>
                      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-right: 1px dotted #E8E8E8; border-top: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                      <tr>
                      <td style="padding-bottom:5px;padding-right:10px;padding-top:40px;">
                      <div style="font-family: sans-serif">
                      <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                      <p style="margin: 0; font-size: 14px; text-align: left;"><span style="font-size:16px;color:#2190e3;"><strong>${item.name}</strong></span></p>
                      </div>
                      </div>
                      </td>
                      </tr>
                      </table>
                      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                      <tr>
                      <td style="padding-bottom:45px;padding-right:10px;">
                      <div style="font-family: sans-serif">
                      <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                      <p style="margin: 0; font-size: 14px; text-align: left;">${item.option}</p>
                      </div>
                      </div>
                      </td>
                      </tr>
                      </table>
                      
                      </td>
                      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-right: 1px dotted #E8E8E8; border-top: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                      <tr>
                      <td style="padding-bottom:65px;padding-left:10px;padding-right:10px;padding-top:55px;">
                      <div style="font-family: sans-serif">
                      <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                      <p style="margin: 0; text-align: center; font-size: 12px;"><span style="font-size:20px;"><strong>${item.amount}</strong></span></p>
                      </div>
                      </div>
                      </td>
                      </tr>
                      </table>
                      </td>
                      <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
                      <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                      <tr>
                      <td style="padding-right:15px;padding-top:55px;padding-bottom:5px;">
                      <div style="font-family: sans-serif">
                      <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                      <p style="margin: 0; text-align: center; font-size: 12px;"><span style="font-size:20px;"><span style="font-size:20px;"><strong>${item.price.toFixed(2)}</strong></span></span></p>
                      </div>
                      </div>
                      </td>
                      </tr>
                      </table>
                      </td>
                      </tr>
                      </tbody>
                      </table>
                      </td>
                      </tr>
                      </tbody>
                      </table>`
                ))
        }
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #000000; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;">
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
              <h3 class="order-total" style="text-align: center;">$${(cartItems.reduce((a, c) => a + c.price * c.amount, 0) * 20/100) + (cartItems.reduce((a, c) => a + c.price * c.amount, 0)).toFixed()}</h3>
            </div>
          </div>
          <hr>
          <div class="section-dividr">
            <div>
              <h3 class="order-total" style="text-align: center;"><small>Payment With ${paymentmethod}</small></h3>
            </div>
            <div>
              <h3 class="order-total" style="text-align: center;">Thanks for shopping at <a href='https://releifweed420.com' style="color: blue; ">releifweed420</a> Your top marijuana dispensary</h3>
            </div>
          </div>
        <div align="center">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:46px;width:198px;v-text-anchor:middle;" arcsize="33%" stroke="false" fillcolor="#fc7318"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:18px"><![endif]--><a href="https://releifweed420.com/shop" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#fc7318;border-radius:15px;width:auto;border-top:1px solid #fc7318;border-right:1px solid #fc7318;border-bottom:1px solid #fc7318;border-left:1px solid #fc7318;padding-top:5px;padding-bottom:5px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:18px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 18px; line-height: 36px;" style="font-size: 18px; line-height: 36px;"><strong>Need More Stuffs ?› </strong></span></span></span></a>
        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
        </div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color:rgb(10, 27, 10); color: #000000; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td colspan="3" style="font-size:7px;height:18px;background-color:#FFFFFF" width="100%"></td>
        </tr>
        <tr>
        <td style="width:25px;background-color:#FFFFFF"> </td>
        <td style="padding-left:35px;padding-right:35px;padding-top:0px;padding-bottom:0px;width:600px;">
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:30px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #052d3d; line-height: 1.2;">
        <p style="margin: 0; font-size: 12px; text-align: center;"><span style="font-size:34px;"><span style="color:#fc7318;font-size:34px;"><strong><span style="font-size:34px;">Troubles? <br/></span></strong></span><span style="font-size:34px;">We're here to help you</span></span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tr>
        <td style="padding-bottom:35px;padding-left:10px;padding-right:10px;">
        <div style="font-family: sans-serif">
        <div style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #787878; line-height: 1.5;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 27px;"><span style="font-size:18px;">support email address <a href="mailto:releifweed420@outlook.com" rel="noopener" style="text-decoration: none; color: #2190E3;" target="_blank" title="releifweed420@outlook.com">releifweed420@outlook.com</a></span><br/><span style="font-size:18px;">or call us at <a href="tel:+17759648771" rel="noopener" style="text-decoration: underline; color: #2190E3;" target="_blank" title="tel:+17759648771">+1-(775)-964-8771</a><br/><strong>we are available all day, everyday</strong></span></p>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td style="width:25px;background-color:#FFFFFF"> </td>
        </tr>
        <tr>
        <td colspan="3" style="font-size:7px;height:18px;background-color:#FFFFFF" width="100%"></td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #000000; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;"> </div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
        <tbody>
        <tr>
        <td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="padding-bottom:5px;padding-top:5px;text-align:center;color:#9d9d9d;font-family:inherit;font-size:15px;">
        <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tr>
        <td style="text-align:center;">
        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
        <!--[if !vml]><!-->
        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
        <!--<![endif]-->
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table><!-- End -->
        </body>
        </html>`
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