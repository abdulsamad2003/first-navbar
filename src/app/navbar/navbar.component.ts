import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  navlinks = [
    { link: 'home' },
    { link: 'Lavorazioni' },
    { link: 'MSW Marconi' },
    { link: 'Grande Distribuzione' },
    { link: 'Personalizzazioni' },
    { link: 'Settore Sanitario' },
  ];

  check = false;
  animate() {
    this.check = true;
  }
  reverseAnimate(){
    this.check = false;
  }

  constructor() {}
  ngOnInit(): void {
    const openNav = document.querySelector('.openNav');
    const closeNav = document.querySelector('.closeNav');
    const navBar = document.getElementById('nav-bar');
    const links = document.querySelectorAll('navlinks');
    console.log(links);

    openNav?.addEventListener('click', () => {
      navBar.style.right = '0%';
      links.forEach((link) => {
        link.classList.add('animate');
        link.classList.remove('reverse-animate');
      });
    });
    closeNav?.addEventListener('click', () => {
      navBar.style.right = '-100%';
      links.forEach((link) => {
        link.classList.remove('animate');
        link.classList.add('reverse-animate');
      });
    });
  }
}
