import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MiniCarComponent } from './components/mini-car/mini-car.component';
import { MycarComponent } from './components/mycar/mycar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    ContentComponent,
    ProductDetailsComponent,
    MiniCarComponent,
    MycarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
