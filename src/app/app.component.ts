import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'blog';
  navLinks = [
    {
      link: 'Home',
    },
    {
      link: 'Lavorazioni',
    },
    {
      link: 'MSW Marconi',
    },
    {
      link: 'Grande Distribuzione',
    },
    {
      link: 'Personalizzazioni',
    },
    {
      link: 'Settore Sanitario',
    },
  ];
}
