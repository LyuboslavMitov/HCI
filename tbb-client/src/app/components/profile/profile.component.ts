import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private currentUser: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.users[parseInt(this.authService.getUserId()) - 1];

    this.profileForm = new FormGroup({
      username: new FormControl(this.currentUser.username,Validators.required),
      newPassword: new FormControl(''),
      confirmPassword: new FormControl(''),
      email: new FormControl(this.currentUser.email)
    });

  }
  onSubmit(formValue: any) {
    let editedUser: User = this.currentUser;
    editedUser.email=formValue.email;
    editedUser.username = formValue.username;
    if (formValue.newPassword || formValue.confirmPassword) {
      if (formValue.newPassword !== formValue.confirmPassword) {
        return;
      }
      editedUser.password = formValue.newPassword;
      
    }
    console.log(editedUser);
  }
}
