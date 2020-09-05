import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurstoryComponent } from './ourstory/ourstory.component';
import { LookBookComponent } from './look-book/look-book.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JewelleryCollectionComponent } from './jewellery-collection/jewellery-collection.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = 
[
{path: 'home', component: HomeComponent },
{path: 'jewellery-collection', component: JewelleryCollectionComponent },
{path: 'look-book', component: LookBookComponent },
{path: 'ourstory', component: OurstoryComponent },
{path: 'contact', component: ContactComponent },
{path: 'login', component: LoginComponent },



//making default page
{path:'', redirectTo: '/look-book',pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
