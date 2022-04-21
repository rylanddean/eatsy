import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eatsy';

  locations = [
    {
      "name":"Dave's Place",
      "address":"123 Main St",
      "city":"San Francisco",
      "province":"ON",
      "postal_code":"A1B 2C3",
      "country":"Canada",
      "latitude":43.6532,
      "longitude":-79.3832,
      "phone":"(416) 555-5555",
      "website":"http://www.daveplace.com",
      "cover_photo":"https://picsum.photos/400/200",
      "bookmarked":false
    },
    {
      "name":"Ryland's Hut",
      "address":"123 Main St",
      "city":"San Francisco",
      "province":"ON",
      "postal_code":"A1B 2C3",
      "country":"Canada",
      "latitude":43.6532,
      "longitude":-79.3832,
      "phone":"(416) 555-5555",
      "website":"http://www.rylands-hut.com",
      "cover_photo":"https://picsum.photos/400/200",
      "bookmarked":true
    }
  ];
}
