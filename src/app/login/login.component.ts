import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  loginForm: FormGroup;
  isValid = false;
  data: any;
  usernameAlert = 'This field is required and should contain at leat 6 characters';
  pwdAlert = 'This field is required and should contain at leat 8 characters';

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  onLoginClick (data) {
    console.log(data);
  }
}
