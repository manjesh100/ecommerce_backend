const express = require('express');
const router = express.Router();
const Validator = require('Validator');
const cartPageProductService = require('../service/cartService');
 
class cart      
{
   async addCart(req, res)
   {  

            try{
                        let rules={
                            userId: 'required',
                            productId: 'required',
                            quantity: 'required'                 
                        };
                        let message ={
                            require: 'you forgot the :att field'
                        };
                        const v = Validator.make(req.body,rules); 
                        if (v.fails()){               
                            const errors = v.errors;                 
                            return res.status(400).json(errors);               
                        }
                        if (v.passes()){
                            let cartData={
                                userId: req.body.userId,
                                productId: req.body.productId,
                                quantity: req.body.quantity,                   
                            }
                            let cartResult = await cartPageProductService.saveProductData(cartData);                            
                            if (cartResult) {
                                return res.status(200).json({ cartResult, 'message': 'cart sucessfully save'})
                              
                            } else {                      
                                return res.status(500).json({'message': 'cart somthing went wrong'});
                            }
                        }
            } catch (error)
            {
                return res.status(400).json({'message': 'somthing went wrong'});    
            }
   }
   
   async cartList(req, res)
   {  
    try {
        let rules = {
            userId: 'required'
        };
        let message ={
            require: 'you forgot the :att field'
        };
        const v = Validator.make(req.body,rules); 
        if (v.fails()){               
            const errors = v.errors;                 
            return res.status(400).json(errors);               
        }
        if (v.passes()){  
            let cartListResult = await cartPageProductService.cartList(req.body.userId);                                
            if (cartListResult) {
                return res.status(200).json({ cartListResult, 'message': 'cart sucessfully List'});               
            } else {   
                return res.status(500).json({ message: cartListResult });
            }
        }        
    } catch (error) {
        return res.status(400).json({'message': 'somthing went wrong'}); 
    } 

   }
   async  cartListDelete(req, res)
   {  
        
    let rules = {
        deleteId: 'required'
    };
    let message ={
        require: 'you forgot the :att field'
    };
    const v = Validator.make(req.body,rules); 
    if (v.fails()){               
        const errors = v.errors;                 
        return res.status(400).json(errors);               
    }
    if (v.passes()){       
        
            try {                
                let cartlistRowDelete = await cartPageProductService.cartListDelete(req.body.deleteId); 
               //console.log(cartlistRowDelete);                  
                if(cartlistRowDelete)  
                {
                    return res.status(200).json({ massage: 'cart list Data has been deleted successfully'})
                }else{
                    return res.status(500).json({massage: 'cart list Data has not been deleted'}) 
                } 
             }catch(error){
                console.log(error);
                return res.status(400).json({'message': 'something went wrong'});                
            }
        }

   }

   async cartCount(req, res)
   {
       console.log(req.body.userId);
        try{
            let cartlistRowCount = await cartPageProductService.cartCount(req.body.userId);                 
            if(cartlistRowCount)  
             {
                 return res.status(200).json({ 'cartCount': cartlistRowCount, massage: 'cart list count Data has been successfully lode'})
             }
        }catch(error){
            console.log(error.message);
            return res.status(400).json({'message':'somthing went worng'});            
        }
   }

//    async countUpdate(req, res)
//    {
//             try{
                
//                 let rules={
//                     userId: 'required|numeric',
//                     productId: 'required|numeric',
                                    
//                 };
//                 let message ={
//                     require: 'you forgot the :att field'
//                 };
//                 const v = Validator.make(req.body,rules); 
//                 if (v.fails()){               
//                     const errors = v.errors;                 
//                     return res.status(400).json(errors);               
//                 }
//                 if (v.passes()){
//                     let cartData={
//                         userId: req.body.userId,
//                         productId: req.body.productId,
//                         quantity: req.body.quantity,                   
//                     }
//                     let cartResult = await cartPageProductService.cartUpdateService(cartData);                            
//                     if (cartResult.errno) {
//                         return res.status(500).json({ message: cartResult.sqlMessage });
//                     } else {                      
//                         return res.status(200).json({ cartResult, 'message': 'cart update sucessfully'})
//                     }
//                 }               

//             }catch(error){
//                 console.log(error.message);
//                 return res.status(400).json({'message': 'somthing went wirng'})
                
//             }
//    }

   


}

const cartObject  =  new cart();
module.exports = cartObject;



 





