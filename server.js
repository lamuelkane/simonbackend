import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productrouter.js'
import userRouter from './routers/userrouter.js'
import ReviewRouter from './routers/ReviewsRouter.js'
import orderRouter from './routers/orderRouter.js'
import nodemailer from 'nodemailer'
import messageRouter from './routers/messageRouter.js'


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
  const allowedOrigins = ['https://releifweed420.herokuapp.com', 'http://releifweed420.herokuapp.com', 'http://localhost:3000'];
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
  res.send("simon server updated")
})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pharelsimons@gmail.com',
    pass: 'lanyoestate'
  }
});


app.post('/contact', (req, res) => {
  let message = {
    from: 'pharelsimons@gmail.com',
        to: 'ashulemuel@gmail.com',
        subject: `New Contact received from ${req.body.name} email ${req.body.email}`,
        text:req.body.message
  }

  transporter.sendMail(message).then(console.log('email sent')).catch((err) => console.log(err))

})

const port = process.env.PORT || 5000

app.listen(port, ()=> {
  console.log(`server started at port ${port}`)
})

