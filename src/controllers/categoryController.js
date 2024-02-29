const express = require('express');
const router =  express.Router();
const categoryService = require('../service/categoryService');
const Validator = require('Validator'); 
 

class authController 
{
   async createCategory(req,res)
   { 
    let rules={
      categoriesName: 'required',
      description: 'required',     
      };
      const message={
          required: 'You are forgot :attr field ',
          email: ':attr not valid',               
      }
      const passData = Validator.make(req.body, rules);
      if(passData.fails())
      {
          const errors =  passData.getErrors();  
          return res.status(400).json(errors); 
      }
       try {
       const data = {
                  categoriesName: req.body.categoriesName,
                  description: req.body.description          
         }         
          let finalResult = await categoryService.categorySave(data);          
          return res.status(200).json({finalResult, 'message': 'Data save sucessfullay'});          
       }catch(error) {
         return res.status(400).json(error)
       } 
   }

   async listCategory(req,res)
   { 
        try 
        {                     
              const categoryResult = await categoryService.listCategory()               
              return res.status(200).json({userdata: categoryResult,   "massage": "Your List successfully Load"});
        }catch(error){          
          return res.status(400).json(error.message);    
        }
    }

    async deleteCategory(req, res)
    {

      let rules={
        categoryId: 'required',         
        };
        const message={
            required: 'You are forgot :attr field ',                         
        }
        const passData = Validator.make(req.body, rules);
        if(passData.fails())
        {
            const errors =  passData.getErrors();  
            return res.status(400).json(errors); 
        }
      try{
            const categoryResult = await categoryService.deleteCategory(req.body.categoryId)               
            return res.status(200).json({userdata: categoryResult,   "massage": "Your category successfully deleted"});
        }catch(error){          
          return res.status(400).json(error.message);    
        } 
    }

    async updateCategory(req, res)
    {
      let rules={
        categoriesName: 'required',
        description: 'required',     
        };
        const message={
            required: 'You are forgot :attr field ',
            email: ':attr not valid',               
        }
        const passData = Validator.make(req.body, rules);
        if(passData.fails())
        {
            const errors =  passData.getErrors();  
            return res.status(400).json(errors); 
        }
         try {
          const updateId = req.body.updateId;
         const data = {
                    categoriesName: req.body.categoriesName,
                    description: req.body.description          
                }         
            let finalResult = await categoryService.categoryUpdate({data,updateId, new: true});          
            return res.status(200).json({finalResult, 'message': 'Data Update sucessfullay'});          
         }catch(error) {
           return res.status(400).json(error)
         } 



    }

}
const authControllerObject = new authController();
module.exports = authControllerObject;
