import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListMainComponent } from './list-main/list-main.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ToFixedPipe } from "../pipe/to-fixed.pipe";
import { ListDetailComponent } from './list-detail/list-detail.component';


@NgModule({
  declarations: [
    ListMainComponent,
    ListItemComponent,
    ToFixedPipe,
    ListDetailComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
