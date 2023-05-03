import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string) :Foods[]{
    if(tag =='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
      {name:'All',count:10},
      {name :'Fastfood',count:4},
      {name :'Pizza',count:2},
      {name :'Lunch',count:3},
      {name :'Meal',count:4},
      {name :'Slowfood',count:4}


    ]
  }
  getAll():Foods[]{
    return [
     {
       id:1,
       name:'Butter Chicken',
       price:5,
       cookTime:'55-60',
       favorite:true,
       origins:['India','UK','USA'],
       star:4.0,
       imageUrl: '/assets/food1.jpg',
       tags:['Meal','Slowfood']
     },
     {
      id:2,
      name:'Veg Pizza',
      price:9,
      cookTime:'25-30',
      favorite:true,
      origins:['Italy','Germany'],
      star:4.3,
      imageUrl: '/assets/food2.jpg',
      tags:['fastfood','Pizza']
    },
    {
      id:3,
      name:'Pani Puri',
      price:5,
      cookTime:'15-20',
      favorite:true,
      origins:['India'],
      star:4.6,
      imageUrl: '/assets/food3.jpg',
      tags:['snack','Fastfood']
    },
    {
      id:4,
      name:'Fish Fry',
      price:15,
      cookTime:'35-40',
      favorite:false,
      origins:['france','china','uk'],
      star:3.5,
      imageUrl: '/assets/food4.jpg',
      tags:['fry','Fastfood']
    },
    {
      id:5,
      name:'Fried Rice',
      price:6,
      cookTime:'35-40',
      favorite:false,
      origins:['India','UK'],
      star:3.5,
      imageUrl: '/assets/food5.jpg',
      tags:['Lunch','Fastfood']
    },
    {
      id:6,
      name:'Chicken gravy',
      price:14,
      cookTime:'15-20',
      favorite:true,
      origins:['India','Bangladesh','UK'],
      star:4.5,
      imageUrl: '/assets/food6.jpg',
      tags:['Meal','Slowfood']
    },
    {
      id:7,
      name:'Dal Fry',
      price:9,
      cookTime:'35-40',
      favorite:true,
      origins:['India','UK'],
      star:4.0,
      imageUrl: '/assets/food7.jpg',
      tags:['Lunch','Slowfood']
    },
    {
      id:8,
      name:'Idli Sambhar',
      price:5,
      cookTime:'25-30',
      favorite:false,
      origins:['India','sri lanka'],
      star:3.8,
      imageUrl: '/assets/food8.jpg',
      tags:['Meal','Lunch']
    },
    {
      id:9,
      name:'Butter Paneer with Naan',
      price:18,
      cookTime:'35-40',
      favorite:true,
      origins:['India','Australia'],
      star:4.8,
      imageUrl: '/assets/food9.jpg',
      tags:['Meal','Slowfood']
    },
    {
    id:10,
    name:'Chicken Pizza',
    price:14,
    cookTime:'25-30',
    favorite:true,
    origins:['Italy','Germany','USA'],
    star:4.6,
    imageUrl: '/assets/food10.jpg',
    tags:['Fastfood','Pizza']
  }
    ]
  }
}
