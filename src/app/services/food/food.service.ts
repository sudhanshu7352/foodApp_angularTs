import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
       tags:['meal','Dinner']
     },
     {
      id:2,
      name:'Butter Paneer with Naan',
      price:18,
      cookTime:'35-40',
      favorite:true,
      origins:['India','Australia'],
      star:4.8,
      imageUrl: '/assets/food2.jpg',
      tags:['meal','Dinner']
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
      tags:['meal','Dinner']
    },
    {
      id:4,
      name:'Fish fry',
      price:15,
      cookTime:'35-40',
      favorite:false,
      origins:['france','china','uk'],
      star:3.5,
      imageUrl: '/assets/food4.jpg',
      tags:['meal','Dinner']
    },
    {
      id:5,
      name:'Fried rice',
      price:6,
      cookTime:'35-40',
      favorite:false,
      origins:['India','UK'],
      star:3.5,
      imageUrl: '/assets/food5.jpg',
      tags:['meal','Dinner']
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
      tags:['fastFood','Snack']
    },
    {
      id:7,
      name:'Dal fry',
      price:9,
      cookTime:'35-40',
      favorite:true,
      origins:['India','UK'],
      star:4.0,
      imageUrl: '/assets/food7.jpg',
      tags:['meal','Dinner']
    },
    {
      id:8,
      name:'idli sambhar',
      price:5,
      cookTime:'25-30',
      favorite:false,
      origins:['India','sri lanka'],
      star:3.8,
      imageUrl: '/assets/food8.jpg',
      tags:['meal','Dinner']
    }
    ]
  }
}
