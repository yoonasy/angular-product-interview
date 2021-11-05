import { Component, OnInit } from '@angular/core';
import {MenuData} from "../../domain/product.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = MenuData

  constructor() { }

  ngOnInit(): void {
  }

}
