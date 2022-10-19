import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login$: Subscription = new Subscription();
  loginForm: FormGroup;
  selectedBranch: any;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      loginID: ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }

  login(){
    let email: string = this.loginForm.value.email;
    let password: string = this.loginForm.value.password;

    this.login$.add(
      this.loginService.login(email, password).subscribe(
        result=>{
          console.log(result)
        },
        error=>{
          console.log("error",error)
        }
      )
    )
  }
  navigate(){
    console.log(this.loginForm.value.loginID);
    if(this.loginForm.value.loginID === "1"){
      this.router.navigate(['/home/barangaydash']);
    }

  }


}
