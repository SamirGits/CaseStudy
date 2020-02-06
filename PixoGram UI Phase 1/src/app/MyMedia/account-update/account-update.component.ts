import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  //styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  constructor(public auth:AuthenticationService) { }

  ngOnInit() {
  }

}
