import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { ServicesModule } from "../services/services.module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ServicesModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    {
      provide: 'URL_CONFIG',
      useValue: {
        url: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule { }
