import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot來配置Router
    RouterModule.forRoot(
      appRoutes, // 設置要如何導航的資料
      { enableTracing: true } // <-- 為DEBUG而設置的
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
