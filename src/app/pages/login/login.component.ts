import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(private fb: FormBuilder, private router: Router, public authState:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      servername: ['', Validators.required],
      databasename: ['', Validators.required]
    });
  }

  loginUser() {
    const user: any = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
      servername: this.loginForm.get('servername').value,
      databasename: this.loginForm.get('databasename').value
    };
    console.log(user);
    this.authState.loggedIn = true
    this.router.navigate(['/view-administration']);
  }
}
