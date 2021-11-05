import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMainComponent} from "./list-main/list-main.component";
import { ListDetailComponent } from "./list-detail/list-detail.component";

const routes: Routes = [
  { path: 'list', component: ListMainComponent },
  { path: 'list-detail/:id', component: ListDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
