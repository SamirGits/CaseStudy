import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  //styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(public auth:AuthenticationService,public router:Router) { }

  ngOnInit() {
  }

}
