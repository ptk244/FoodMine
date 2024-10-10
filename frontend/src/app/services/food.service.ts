import { Injectable } from '@angular/core';
import { Food } from '../shared/food';
import { sample_food, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodbySerchterm(serchterm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+serchterm);
  }

  getFoodById(foodId:string){
    return this.http.get<Food[]>(FOODS_BY_ID_URL+foodId);
  }
  

  getAllTags(){
     return  this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllfoodsByTag(tag: any) {
    let data = tag.toLowerCase() === "all" ?
      this.getAll() :
      this.http.get<Food[]>(FOODS_BY_TAG_URL+tag);
    
    console.log(tag);
    return data;
  }
  
  
}
