import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,public auth:AuthenticationService) { }

  ngOnInit() {
  }

}
