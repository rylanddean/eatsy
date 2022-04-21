import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() name = ''; // this is the location nane
  @Input() address = ''; // this is the location address
  @Input() cover_photo = ''; // this is the location cover photo
  @Input() desc = ''; // this is the location description

}
