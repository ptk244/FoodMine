import { Schema, model } from "mongoose";

export interface Food{
    id:string;
    name:string;
    price:number;
    tags?:string[];
    favorate:boolean;
    stars:number;
    imageUrl:string;
    origins:string[];
    cooktime:string;
}

export const FoodSchema=new Schema<Food>(
    {
        name:{type:String, required:true},
        price:{type:Number, required:true},
        tags:{type:[String]},
        favorate:{type:Boolean, default:false},
        stars:{type:Number, required:true},
        imageUrl:{type:String, required:true},
        origins:{type:[String], required:true},
        cooktime:{type:String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const Foodmodel=model<Food>('food',FoodSchema);