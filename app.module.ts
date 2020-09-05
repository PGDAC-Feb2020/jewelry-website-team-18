import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { LookBookComponent } from './look-book/look-book.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,

    Page2Component,
    Page3Component,
    Page4Component,
    OurstoryComponent,
    LookBookComponent,
    LoginComponent,

    HomeComponent,
    JewelleryCollectionComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
