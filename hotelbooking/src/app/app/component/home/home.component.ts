import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myGroup= new FormGroup({
    amenities : new FormControl(),
    roomName : new FormControl(),
    files : new FormControl(),
    
  });

  checkin = new FormControl();
    checkout = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
