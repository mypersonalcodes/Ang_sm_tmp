import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  cred=[{user:'admin',pass:'1234'}]
  username:string;
  password:string;

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.username=='admin' && this.password=='1234'){
      this.router.navigate(['admin']);
    }
  }
}
