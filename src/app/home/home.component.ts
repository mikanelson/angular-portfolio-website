import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  bio = '';
  data = fetch('https://api.github.com/users/mikanelson')
    .then((response) => response.json())
    .then((data) => {
      this.bio = data.bio;
    });
}
