import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navLinks', { static: false }) myNavs: ElementRef;
  @ViewChild('burger', { static: false }) myBurger: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  navSlide() {
    // Step 1: use View Child to get access to the element
    const nav = this.myNavs.nativeElement;
    nav.classList.toggle('nav-active');
    const navLinks = nav.querySelectorAll('.nav-links li');
    console.log(navLinks);
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
    });
    const burger = this.myBurger.nativeElement;
    burger.classList.toggle('toggle');
  }

}
