import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import data, { vape } from '../products.js'
import product , {category, productsimage} from '../module/productmodule.js'
import multer from 'multer'
import fs from 'fs'

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })

  var upload = multer({storage})


const productRouter = express.Router()

productRouter.get('/products/:cat', expressAsyncHandler(async (req, res) => {
    const category = req.params.cat
    const products = await product.find({})
    let createdProducts = products.filter(pro => pro.category.toUpperCase() === category)

    res.send(createdProducts);
}))


productRouter.get('/other', expressAsyncHandler(async (req, res) => {
    const products = await product.find({})
    res.send(products);
}))

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    await product.remove({}) 
    // const createdProducts = await product.insertMany(data.products);
    res.send('{ createdProducts }');
}))

productRouter.get('/other/seed', expressAsyncHandler(async(req, res) => {
    // await product.remove({}) 
    const createdProducts = await product.insertMany(vape);
    res.send({ createdProducts });
}))


productRouter.post('/updateproduct', expressAsyncHandler(async (req, res) => {
    const Product = req.body
    let updatedProduct = await product.updateOne({_id: req.body._id}, Product, (err, res) =>  {
        if (err) throw err;
        console.log("1 document updated");
    })
    res.send(updatedProduct)
}))

productRouter.post('/createproduct', expressAsyncHandler(async (req, res) => {
    const productExist = await product.findOne({name: req.body.name})
    if (productExist) {
        res.status(400).send({error: "product with same name already exist"})
        return
    }
        const Product = new product(req.body)
        const createdproduct = await Product.save()
        res.send(createdproduct)
}))

productRouter.post('/updateproducts', expressAsyncHandler(async (req, res) => {
    let date = new Date()
    let array = req.body
    array.map(async (item) => {
  let updatedProduct = await product.updateOne({_id: item._id}, item, (err, res) => {
            if (err) console.log(err)
        })
    })
    res.send({message: 'successfully updated products'})
}))

productRouter.get('/category/seed', expressAsyncHandler(async (req, res) => {
    await category.remove()
    const categories = await category.insertMany(data.categories)
    res.send({categories})
}))

productRouter.get('/categories', expressAsyncHandler(async(req, res) => {
    const categories = await category.find();
    res.send(categories)
}))

productRouter.post('/uploadphoto', upload.single('picture'), expressAsyncHandler(async(req, res) => {
// let img = fs.readFileSync(req.body.path);
//  let encode_image = img.toString('base64');
//  // Define a JSONobject for the image attributes for saving to database
//  let finalImg = {
//       contentType: req.body.mimetype,
//       image:  new Buffer(encode_image, 'base64')
//    };
//   let image = await productsimage.insertOne(finalImg, (err, result) => {
//   	console.log(result)
//     if (err) return console.log(err)
//     console.log('saved to database')
//   })
// console.log('file received...' + req.file)
  res.send(req.file)
}))

productRouter.get('/photos', (req, res) => {
    productsimage.find((err, result) => {
          const imgArray= result.map(element => element._id);
    
       if (err) return console.log(err)
       res.send(imgArray)
    
      })
    });

productRouter.get('/photo/:id', (req, res) => {
    var filename = req.params.id;
    
    productsimage.findOne({'_id': ObjectId(filename) }, (err, result) => {
    
        if (err) return console.log(err)
    
        res.contentType('image/jpeg');
        res.send(result.image.buffer)
        })
    })

productRouter.get('/delete/:id', async(req, res) => {
    try {
        let Product = await product.deleteOne({_id : req.params.id})
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json(error)
    }
})

productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    let Product = await product.findById(req.params.id)
    if (Product) {
        res.send(Product);
    } else {
        res.send({message : "peoduct not found"})
    }
}))
export default productRouter