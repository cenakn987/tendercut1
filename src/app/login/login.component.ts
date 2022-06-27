import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private router:Router,private formBuilder:FormBuilder,private authService:AuthenticationService) { 
    this.loginForm = this.formBuilder.group(
      {"name":["",[Validators.required,Validators.maxLength(10),Validators.pattern(/[a-zA-Z0-9]/gm)]],
      "password":["",[Validators.minLength(8),Validators.pattern(/[a-zA-Z0-9]/gm)]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      this.authService.authenticated = true;
      this.router.navigate(["/dashboard"]);
    }
    console.log("form submitted",this.loginForm.valid )
  }

  get name(){
    return this.loginForm.get('name')
  }
  get password(){
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
   
  }

}
