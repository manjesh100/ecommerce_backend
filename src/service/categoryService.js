const express =require('express');
const app= express();
const db = require('../database/connection');
const categoryModel =require('../modals/category');
class categoryService
{

     async categorySave(data)
     {
      try {         
        const categoryModelObject = new categoryModel(data);         
        let categoryObject = await categoryModelObject.save() 
         return categoryObject;
      } catch (error) {        
            return error;             
      }
     }

     async listCategory() 
    {
      try{   
        const categoryListObject = await categoryModel.find({is_active: 1});
        return categoryListObject;            
      }catch(error){          
        return error;  
      }
    }

    async deleteCategory(data)
    {
        try{   
            const categoryListObjectDelete = await categoryModel.deleteOne({ _id: data });
            return categoryListObjectDelete;            
          }catch(error){          
            return error;  
          }
    }

    async categoryUpdate({data, updateId})
    {
        try{  

            const updateCategoryObject = await categoryModel.findOneAndUpdate({ _id: updateId},{ $set: {data}},{ new: true});
             
            return updateCategoryObject;            
          }catch(error){          
            return error;  
          }
           

    }


    


}

const categoryServiceObject =new categoryService();
module.exports = categoryServiceObject;