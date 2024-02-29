const express =require('express');
const app= express();
const db = require('../database/connection');
const cartModel =require('../modals/cart');
const productModel =require('../modals/product');
class cartService
{

     async saveProductData(data)
     {
      try {
        const newCart = new cartModel(data);             
        let createnewCart = await newCart.save()         
         return createnewCart;
      } catch (error) {        
            return error;             
      }
     }

     async cartList(authId) {
      try {        
        const cartMastersCollection = await cartModel.find({userId: authId})
        .populate({
          path: 'productId',
          model: productModel,
          select:'name picture',           
        }).exec();    
        return cartMastersCollection;  
              
      } catch (error) {
        console.error(error);
        // Rethrow the error to be caught by the calling function if needed
        throw error;
      }
    }
    
 
 async cartListDelete(data)
 {      
    try{       
        const cartObjectDelete = await cartModel.deleteOne({ _id: data});
        return cartObjectDelete;            
      }catch(error){           
        return error;  
      } 
 }
 async cartCount(userId)
 {
   try {
      const cartCountObject =  await cartModel.countDocuments({userId: userId});
      console.log(userId);
      return cartCountObject;
    
   } catch (error) {
    return error; 
    
   }



 }


}

const cartServiceObject =new cartService();
module.exports = cartServiceObject;