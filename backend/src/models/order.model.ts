import { Model, Schema, Types } from "mongoose";
import { Food, FoodSchema } from "./food.model";
import { OrderStatus } from "../constats/order_status";


export interface LatLng{
    lat:string;
    lng:string;
}

export const LatLngSchema=new Schema<LatLng>(
    {
        lat:{type:String, require:true},
        lng:{type:String, require:true}
    }
);

export interface Orderitem{
    food:Food;
    price:number;
    quentity:number;
}

export const OrderitemSchem=new Schema<Orderitem>(
    {
        food:{type:FoodSchema,required:true},
        price:{type:Number,required:true},
        quentity:{type:Number,required:true},

    }
);

export interface Order{
    id:number;
    items:Orderitem[];
    totalPrice:number;
    name:string;
    address:string;
    addressLatLng:LatLng;
    paymentId:string;
    createdAt:string;
    status:OrderStatus;
    user:Types.ObjectId;j

}