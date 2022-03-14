import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productrouter.js'
import userRouter from './routers/userrouter.js'
import ReviewRouter from './routers/ReviewsRouter.js'
import orderRouter from './routers/orderRouter.js'
import nodemailer from 'nodemailer'
import expressAsyncHandler from 'express-async-handler'
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
  const allowedOrigins = ['https://releifweed420.herokuapp.com', 'http://releifweed420.herokuapp.com', 'https://releifweed420.com', 'http://releifweed420.com', 'http://localhost:3000'];
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
  res.send("simon server gain")
})


var transporter = nodemailer.createTransport({
  // service: 'smtp.live.com',
  // host: 'smtp.live.com',
  host: 'smtp.titan.email',
  auth: {
    // user: 'releifweed420@outlook.com',
    user: 'info@releifweed420.com',
    pass: 'F7OMFxfzNF'
    // pass: 'lanyoestate1'
  },
  // port: 587
  port: 465
});

app.post('/contact', expressAsyncHandler((req, res) => {
  let message = {
    from: 'releifweed420@outlook.com',
        to: 'releifweed420@outlook.com',
        subject: `New Contact received from ${req.body.name} email ${req.body.email}`,
        text:req.body.message
  }
  transporter.sendMail(message).then(() => {
    console.log('email sent')
    res.status(200).send('email sent successfully')
  }).catch((err) => () => {
    console.log('err occured' + err)
    res.status(200).send('an err occured whille sending email' + err)
  })
}))


app.get('/email', expressAsyncHandler((req, res) => {
  let message = {
    // from: 'releifweed420@outlook.com',
    from : 'info@releifweed420.com',
        to: 'ashulemuel@gmail.com, pharelsimons@gmail.com',
        subject: `New email received`,
        text: 'some random message'
  }

  transporter.sendMail(message).then(res.status(200).send('email sent successfully')).catch((err) =>   res.status(500).send('an arror occured' + err))

  res.send('email sent successfully')
}))

const port = process.env.PORT || 5000

app.listen(port, ()=> {
  console.log(`server started at port ${port}`)
})

