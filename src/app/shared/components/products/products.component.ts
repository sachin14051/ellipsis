import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/backend/backend';
import { Ipost } from 'src/app/moduls/posts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  postArray !: Array<Ipost>
  constructor() { }

  ngOnInit(): void {
    this.postArray =  posts
  }

}
