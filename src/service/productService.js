const express =require('express');
const app= express();
const db = require('../database/connection');
const productModel =require('../modals/product');
class productService
{

     async saveProductData(data)
     {
      try {
        const newProductt = new productModel(data);  
        console.log(data);      
        let createnewProductt = await newProductt.save()         
         return createnewProductt;
      } catch (error) {        
            return error;             
      }
     }

 async productList(data)
 {
    try{   
        const categoryListObject = await productModel.find({catId: data});
        return categoryListObject;            
      }catch(error){          
        return error;  
      } 
 }
 async allProductList()
 {
    try{   
        const categoryListObject = await productModel.find();
        return categoryListObject;            
      }catch(error){          
        return error;  
      }
 }
 async productListDelete(data)
 {
    try{   
        const productObjectDelete = await productModel.deleteOne({ _id: data});
        return productObjectDelete;            
      }catch(error){          
        return error;  
      } 
 }


}

const productServiceObject =new productService();
module.exports = productServiceObject; 