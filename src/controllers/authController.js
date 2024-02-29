const express = require('express');
const router =  express.Router();
const authService = require('../service/authService');
const Validator = require('Validator'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class authController 
{
   async sinupUser(req,res)
   { 
    let rules={
      name: 'required',
      email: 'required|email',
      phone: 'required|numeric',
      password: 'required',
      address: 'required',
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
         let password = req.body.password;
         const saltRules = bcrypt.genSaltSync(10);
         const saltpassword = bcrypt.hashSync(password, saltRules);
       const data = {
           email: req.body.email,
           name: req.body.name,
           phone: req.body.phone, 
           address: req.body.address, 
           password: saltpassword
         }  
          let finalResult = await authService.sinupData(data);  
          return res.status(200).json({finalResult, 'message': 'Data save sucessfullay'});          
       }catch(error) {
         return res.status(400).json(error)
       }

     
   }

   async loginUser(req,res)
   { 
        try 
        { 
                const rules ={
                  email:'required|email',
                  password:'required'
                }
                const messages ={
                  required: 'You forgot the :attr field',
                  email: ':attr is not valid'
                }
                const validateData = Validator.make(req.body, rules);
                if(validateData.fails())
                {
                  const errors = validateData.getErrors();
                  return res.status(400).json(errors);
                }
                
                let  email= req.body.email;                 
              //  console.log(user[0]);      
              const user = await authService.login(email)
              if(user == null)
                {         
                  return res.status(500).json({'massage': '!email does not found'})
                } 
              const password = req.body.password                   
              const passwordValidate = bcrypt.compareSync(password, user.password);
              
              if(passwordValidate)
              {                  
                let authID = user._id;
                const jwtToken = jwt.sign(
                  { authID, }, "JwtKey",{
                    algorithm: "HS256",
                    expiresIn: 3600,
                  })                                   
                 
                  return res.status(200).json({userdata: user, jwtToken,   "massage": "You are successfully logged in"});
              }
              else{
                return res.status(500).json({"massage": "password does not match"});
              } 
        }catch(error){          
          return res.status(400).json(error.message);    
        }
      }
}
const authControllerObject = new authController();
module.exports = authControllerObject;
