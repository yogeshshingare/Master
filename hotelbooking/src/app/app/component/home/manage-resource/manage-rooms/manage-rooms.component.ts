import { Component, OnInit } from '@angular/core';
import { Manageresource } from '../../../../manageresource';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent implements OnInit {
  myGroup= new FormGroup({
    amenities : new FormControl(),
    roomName : new FormControl(),
    files : new FormControl()
  })

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Manageresource(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

newHero() {
this.model = new Manageresource(42, '', '','');
}
showFormControls(form: any) {
return form && form.controls.name &&
form.controls.name.value; // Dr. IQ
}

  constructor() { }

  ngOnInit(): void {
  }

}
