const { request } = require('express');
const express = require('express');
const router = express.Router();
const Validator= require('Validator');
const productService = require('../service/productService');
const fs = require("fs");
const path = require("path");

class productcontroller 
{

    async  saveProduct(req, res) 
    {     
        try {  
            let categoriesId  = req.body.catId; 
            let picure  = req.body.picure;       
            picure        
            if(categoriesId && picure)
            {
            fs.renameSync(path.normalize(__dirname + "../../../public/productImage/"+req.file.filename),
             path.normalize(__dirname + "../../../public/productImage/"+req.file.originalname))
           // console.log(req.file)  
            }
            let rules ={                
                catId :'required|integer', 
                name :'required', 
                quantity :'required|integer',
                price :'required'                 
               };
               let messages = {
                // custom message for based rules
                required: 'You forgot the :attr field', 
            }; 
            let v = Validator.make(req.body,rules);
            if (v.fails()) 
            { 
                const errors = v.getErrors();
                console.log(errors);
                return res.status(500).json(errors); 
            }
            if(v.passes())
            { 
                let ProductData =  {
                    //user_id :req.jwtVerifier.authID,
                    catId:req.body.catId,
                    name:req.body.name,
                    picture:'public/productImage/'+req.file.originalname,
                    quantity:req.body.quantity,
                    price:req.body.price
                }    
                            
                let productControllerObject = await productService.saveProductData(ProductData);
                console.log(productControllerObject);
                if(productControllerObject){
                    return res.status(200).json({result: productControllerObject, 'message': 'Data save sucessfullay'})
                  }else{
                    return res.status(500).json({'message': 'something went wrong insert Opration'})                   
                  } 
            } 
        }catch(error){
            console.log(error.message);
            if(error.message)
            {
              return res.status(400).json({'message': 'somthing went wrong'});
            }            
        }
    }

    async productList(req, res)
    {
        try {

            let rules ={
                catId :'required|integer'                             
               };
               let messages = {
                // custom message for based rules
                required: 'You forgot the :attr field', 
            }; 
            let v = Validator.make(req.body,rules);
            if (v.fails())             { 
                const errors = v.getErrors();
                console.log(errors);
                return res.status(500).json(errors); 
            }
            if(v.passes())
            {  
              let  catId = req.body.catId;
              let productListObject = await productService.productList(catId);
              console.log(typeof(productListObject));
              if(Object.keys(productListObject).length === 0 )
              {
                return res.status(500).json({message:"Product not found"});                            
              }else{               
                return res.status(200).json({result: productListObject, 'message':"product sucessfully list"});   
              } 
            }
        } catch (error) {
            return error.message;            
        }
    } 
    async allProductList(req, res)
    { 
        try {
            let allproductList = await productService.allProductList();
            return res.status(200).json({allproductList, 'message': 'all product list sucessfullay'});  
        } catch (error) 
        {
              return error.message;
        } 
            
    }

    async productDelete(req, res)
    {    
      try {
       let productId = req.body.productId;
       
       let allproductDelete = await productService.productListDelete(productId);       
       if(Object.keys(allproductDelete).length === 0 )
       {
        return res.status(500).json({allproductDelete, 'message': 'something went rong'}); 
       }else{
        return res.status(200).json({allproductDelete, 'message': 'data sucessfully delete'}); 
       } 
      }catch (error) {
        return error.sqlMessage; 
      }

    }
 
    



}

const productObject = new productcontroller();
module.exports = productObject;
