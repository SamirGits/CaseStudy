import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage : string;
  autherized : boolean;

  constructor(public auth : AuthenticationService, public router : Router) { 
      this.errorMessage = "Invalid Credentials!!!";
      this.autherized = true;
  }


  checkLogin(txtLogin : HTMLInputElement, txtPass : HTMLInputElement){
    if(this.auth.authenticate(txtLogin.value, txtPass.value)){
        this.autherized = true;
        this.router.navigate(['/gallery-component']);
    }else{
        this.autherized = false;
    }
  }
  reset(txtLogin:HTMLInputElement,txtPass:HTMLInputElement)
  {
     txtLogin.value = "";
     txtPass.value = "";
     
  }

  ngOnInit() {
  }

}
