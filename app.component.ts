import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfinalproject';

  linkslist = [
    { title: 'JEWELLERY COLLECTION', link: 'jewellery-collection' },
    { title: 'LOOK BOOK', link: 'look-book' },
    { title: 'CONTACT', link: 'contact' },
    { title: 'OUR STORY', link: 'ourstory' },
    { title: 'LOGIN', link: 'login' },

  ];

  

  constructor(private router: Router) {}

  gotoRoute(page) {
    this.router.navigate(page)

  }
}
