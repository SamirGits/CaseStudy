import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  //styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myFormGroup:FormGroup;
  constructor(public router: Router,public formBuilder:FormBuilder,public userService:UserServiceService) {
    this.myFormGroup=formBuilder.group({
    userName:new FormControl(),
    password:new FormControl(),
    repeatPassword:new FormControl(),
    email:new FormControl()

});
}
register():void
{
  this.userService.addUsers(this.myFormGroup.value).subscribe(data=>{
  alert("user registered");
  }
    );
}

  ngOnInit() {
  }
}
