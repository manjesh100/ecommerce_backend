const express =require('express');
const app= express();
const db = require('../database/connection');
const usersModel =require('../modals/users');
class authService
{

     async sinupData(data)
     {
      try {
        const newStudent = new usersModel(data);        
        let createUser = await newStudent.save()         
         return createUser;
      } catch (error) {        
            return error;             
      }
     }

     async login(email) {
      try{   
        const user = await usersModel.findOne({email});
        return user;            
      }catch(error){          
        return error;  
      }
  }


}

const authObject =new authService();
module.exports = authObject;