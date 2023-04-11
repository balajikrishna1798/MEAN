import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tags } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
  getAllFoodsBySearch(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tags[]{
    return sample_tags
  }
  getAllFoodsByTag(searchTag:string){
    return searchTag=="All"?this.getAll():
    this.getAll().filter(food=>food.tags?.includes(searchTag))
  }
}
