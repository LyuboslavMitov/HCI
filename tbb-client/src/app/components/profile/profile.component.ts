import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

}