import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];
  tags?: Tag[];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void{
    if(!this.foodPageTags){
      this.tags = this.foodService.getAllTags();
    }
  }
}
