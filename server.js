import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productrouter.js'
import userRouter from './routers/userrouter.js'
import ReviewRouter from './routers/ReviewsRouter.js'
import orderRouter from './routers/orderRouter.js'
import nodemailer from 'nodemailer'
import messageRouter from './routers/messageRouter.js'
import cors from 'cors'


dotenv.config()

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://lanyoestate:lanyoestate@cluster0.9mm9k.mongodb.net/simonproject?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(console.log('connected to database'))

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     // origin:'https://advancedshopping.herokuapp.com',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions));

app.use((req, res, next) => {
  const allowedOrigins = ['https://advancedshopping.herokuapp.com', 'https://releifweed420.herokuapp.com', 'http://releifweed420.herokuapp.com', 'http://advancedshopping.herokuapp.com', 'http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.use('/api/users', userRouter) 

app.use('/api/products', productRouter)

app.use('/api/reviews', ReviewRouter)

app.use('/order', orderRouter)

app.use('/chats', messageRouter)

app.get("/", (req, res) => {
  res.send("lanyo estate")
})

// app.use((err, req, res, next) => {
//   res.status(500).send({message: err.message})
// })

const port = process.env.PORT || 5000

app.listen(port, ()=> {
  console.log(`server started at port ${port}`)
})



var transporter = nodemailer.createTransport({
    service: 'gmail',
    //port:  465,
    //secure : true,
    auth: {
      user: 'pharelsimons@gmail.com',
      pass: 'lanyoestate'
    }
  });


//   transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

    // const mailOptions = {
    //     from: 'pharelsimons@gmail.com',
    //     to: 'ashulemuel@gmail.com',
    //     subject: 'Thanks For Shopping With Us',
    //     html:"<h1>hello world</h1>"
    //   }


    const mailOptions = {
      from: 'pharelsimons@gmail.com',
      to: 'ashulemuel@gmail.com',
      subject: 'Thanks For Shopping With Us',
      html: ` <div class="w-50 w-s-90 margin-auto" style="width: 50%; margin: auto;">
      <div class="products-container" style="padding: 10px; border: 0.3px solid rgb(214, 212, 212); width: 100%;">
          <div class="main-bg white padding" style="background-color: rgb(10, 27, 10); color: white; padding: 15px;">
              <h2 class="center" style="text-align: center;">Order Preview</h2>
              <p class="center" style="text-align: center;">just a preview of your order</p>
          </div>
      <p>Your Order </p>
<div class="margin-bottom" style="margin-bottom: 30px;">
              <h3>Shipping Address</h3>
              <div><b>Country</b>: any country</div>
              <div><b>City</b>: tiko</div>
              <div><b>Address</b>: sample address</div> 
              <div><b>Zip</b>:  00000</div>
              <div><b>Name</b>: test name</div>
              <div><b>Contact</b>: 0000000000</div>
          </div>
      <table class="cartItems" style="width: 100%; display: block;" width="100%"> 
              <hr>
              <tr>
                  <td class="td1"><img src="http://advancedshopping.herokuapp.com/assets/images/logo.jpg" alt="" style="height: 60px; width: 60px;" width="60" height="60"></td>
                  <td class="td2" style="width: 250px; max-width: 15%; text-align: center;" width="250" align="center">January</td>
                  <td class="td3" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$100</td>
                  <td class="td4" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">10</td>
                  <td class="td5" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$1000</td>
              </tr>  

              <tr>
                  <td class="td1"><img src="http://advancedshopping.herokuapp.com/assets/images/logo.jpg" alt="" style="height: 60px; width: 60px;" width="60" height="60"></td>
                  <td class="td2" style="width: 250px; max-width: 15%; text-align: center;" width="250" align="center">January</td>
                  <td class="td3" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$100</td>
                  <td class="td4" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">10</td>
                  <td class="td5" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$1000</td>
              </tr> 
        <hr> 
              <tr>
                  <td class="td1"><img src="http://advancedshopping.herokuapp.com/assets/images/logo.jpg" alt="" style="height: 60px; width: 60px;" width="60" height="60"></td>
                  <td class="td2" style="width: 250px; max-width: 15%; text-align: center;" width="250" align="center">January</td>
                  <td class="td3" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$100</td>
                  <td class="td4" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">10</td>
                  <td class="td5" style="width: 100px; max-width: 10%; text-align: center;" width="100" align="center">$1000</td>
              </tr> 


      </table>
      <hr>
      <div class="ifo">
          
          <div class="center" style="text-align: center;">
              <h3>Details</h3>
              <div><b>Subtotal</b>: <span>$55</span></div>
              <div><b>Shipping</b>: <span>$100.00</span></div>
          </div>
      </div>
      <hr>
      <div class="section">
          <div>
              <p class="order-totaltext" style="color: rgb(10, 27, 10); text-align: center;">Order Total</p>
              <h3 class="order-total" style="text-align: center;">$441.00</h3>
          </div>
      </div>
      <hr>
      <div class="section-dividr">
          <div>
              <h3 class="order-total" style="text-align: center;"><small>Payment With    </small><span>447.990</span></h3>
          </div>
      </div>
  </div>
  
  </div>
 

<style>
@media screen and (max-width: 768px) {
.w-s-90 {
width: 90% !important;
}
}
</style>`
    }

      transporter.sendMail(mailOptions).then(console.log('email sent')).catch((err) => console.log(err))