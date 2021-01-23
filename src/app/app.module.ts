import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule, AccordionConfig } from 'ngx-bootstrap/accordion';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmmoManageComponent } from './ammo-manage/ammo-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    AmmoManageComponent
  ],
  imports: [
    BrowserAnimationsModule,  
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
