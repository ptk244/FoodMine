import { Router } from "express";
import { sign } from "jsonwebtoken";
import { sample_users } from "../data";
import expressAsyncHandler = require("express-async-handler");
import { User, Usermodel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constats/status";
import bcrypt  = require('bcryptjs')

const router=Router();


router.get("/seed",expressAsyncHandler(
    async (req,res)=>{
        const usersCount=await Usermodel.countDocuments();
        if(usersCount>0){
            res.send("seeed is already done!");
            return;
        }
        await Usermodel.create(sample_users);
        res.send("seed is Done!");
    }
))

router.post("/login",expressAsyncHandler(
   async (req,res)=>{
        const {email,password}=req.body;
        // const user=sample_users.find(user=>user.email===email && user.password===password);
        const user= await Usermodel.findOne({email,password})
    
        if(user){
            res.send(generateTokenResponse(user))
        }
        else{
            res.status(HTTP_BAD_REQUEST).send("User name and password is not Vlid!")
        }
    }
))

router.post('/register',expressAsyncHandler(
    async(req,res)=>{
        const {name, email, password, address}=req.body;
        const user=await Usermodel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST).send('User already exist,please login!');
            return;
        }
      
        const encryptedPassword=await bcrypt.hash(password,10);

        const newUser:User={
            id: '',
            name,
            email: email.toLocaleLowerCase(),
            password:encryptedPassword,
            address,
            isAdmin: false
        }

        const dbUser=await Usermodel.create(newUser);
        res.send(generateTokenResponse(dbUser))
    }
))

const generateTokenResponse = (user: any) => {
    const token = sign(
      {
        email: user.email,
        isAdmin: user.isAdmin,
      },
      "SomeRandomText",
      {
        expiresIn: "30d",
      }
    );
    user.token = token;
    return user;
  };

  export default router;
