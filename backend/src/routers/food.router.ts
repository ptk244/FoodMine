import { Router } from "express";
import { sample_food, sample_tags } from "../data";
import expressAsyncHandler = require("express-async-handler");
import { Foodmodel } from "../models/food.model";

const router=Router();

router.get("/seed",expressAsyncHandler(
    async (req,res)=>{
        const foodsCount=await Foodmodel.countDocuments();
        if(foodsCount>0){
            res.send("seeed is already done!");
            return;
        }
        await Foodmodel.create(sample_food);
        res.send("seed is Done!");
    }
))
router.get("/",async(req,res)=>{
    const foods=await Foodmodel.find();
    res.send(foods);
})

router.get("/search/:serchTerm",async(req,res)=>{
    // const serchTerm=req.params.serchTerm;
    // const foods=sample_food.filter(food=>food.name.toLocaleLowerCase().includes(serchTerm.toLocaleLowerCase()));
    const serchTerm=new RegExp(req.params.serchTerm,'i');//i make this sercherm caseinsensitive
    const foods=await Foodmodel.find({name:{$regex:serchTerm}})
    res.send(foods);
})


router.get("/tags",expressAsyncHandler(
   async(req,res)=>{
        const tags=await Foodmodel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id:'$tags',
                    count:{$sum:1}
                }
            },
            {
                $project:{
                    _id:0,
                    name:'$_id',
                    count:'$count'
                }
            }
        ]).sort({count:-1});

        const all={
            name:'All',
            count:await Foodmodel.countDocuments()
        }

        tags.unshift(all);

        res.send(tags);
    }

    // 2 foods each with 3 tags,unwind 6 foods tags 1
))

router.get("/tag/:tagname",async(req,res)=>{
    // const tagName=req.params.tagname;
    // const foods=sample_food.filter(food=>food.name.toLocaleLowerCase().includes(tagName.toLocaleLowerCase()))
    const foods=await Foodmodel.find({tags:req.params.tagname});
    res.send(foods);
})

router.get("/:foodId",expressAsyncHandler(
    async (req,res)=>{
        // const foodId=req.params.foodId;
        // const foods=sample_food.find(food=>food.id==foodId);
        const foods=await Foodmodel.findById(req.params.foodId)
        res.send(foods)
    }
)
)

export default router;