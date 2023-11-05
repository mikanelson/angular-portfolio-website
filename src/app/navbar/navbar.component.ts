import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  profileImage = '';
  data = fetch('https://api.github.com/users/mikanelson')
    .then((response) => response.json())
    .then((data) => {
      this.profileImage = data.avatar_url;
    });
}
