import Product from "../models/product.js";
import { isAdmin } from "./userController";

export function createProduct(req,res){

    if(!isAdmin(req)){
        res.json({
            message : "Please logis as administrator to add products"
        })
        return
    }

    const newProductData = req.body

    const product = new Product(newProductData)

    product.save().then(()=>{
        res.json({
            message: "Product created"
        })
    }).catch((error)=>{
        res.json({
            message: "Product not created"
        })
    })
}

export function getProducts(req,res){
    Product.find({}).then((products)=>{
        res.json(products)
    })
}