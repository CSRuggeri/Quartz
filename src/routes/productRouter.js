// In src/routes/productRouter.js
import { Router } from "express";
import { addProduct, listProducts, getProductId, getProductByName,editProduct,removeProduct } from "../controllers/productController.js";
import uploadController from '../controllers/uploadController.js'
import upload from '../utils/midleware/mullter.js'
export const productRouter = Router();

productRouter.post('/', addProduct);
productRouter.get('/', listProducts);
productRouter.get('/search/:id', getProductId);
productRouter.get('/name/:name', getProductByName);
productRouter.post('/edit/:id', editProduct)
productRouter.post('/', upload.single('file') ,uploadController.imageUpload, addProduct)
productRouter.delete('/delete/:id', removeProduct)