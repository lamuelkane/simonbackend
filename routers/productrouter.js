import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import data from '../products.js'
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

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const products = await product.find({})
    const createdProductcategory = req.query.category.toLowerCase() === "all-products"?products:products.filter(prod => prod.category.toLowerCase() === req.query.category.toLowerCase())
    const createdProducts = req.query.search === ""?createdProductcategory:createdProductcategory.filter(prod => prod.name.toLocaleLowerCase().includes(req.query.search.toLocaleLowerCase()))
    res.send({ createdProducts });
}))


productRouter.get('/other', expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const products = await product.find({})
    res.send(products);
}))

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    console.log("received reqest");
    await product.remove({}) 
    const createdProducts = await product.insertMany(data.products);
    res.send({ createdProducts });
}))


productRouter.post('/updateproduct', expressAsyncHandler(async (req, res) => {
    const Product = req.body
    let updatedProduct = await product.updateOne({_id: req.body._id}, Product, (err, res) =>  {
        if (err) throw err;
        console.log("1 document updated");
    })
    res.send(Product)
}))

productRouter.post('/createproduct', expressAsyncHandler(async (req, res) => {
    console.log('creating...')
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
  let updatedProduct = await product.updateOne({_id: item.product}, {numOrders: item.numOrders, lastlyOrdered: item.lastlyOrdered}, (err, res) => {
            if (err) console.log(err)
            else { console.log(`updated ${item.product}`)}
        })
        console.log(updatedProduct)
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
                console.log(imgArray);
    
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

productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    let Product = await product.findById(req.params.id)
    if (Product) {
        res.send(Product);
    } else {
        res.send({message : "peoduct not found"})
    }
}))
export default productRouter