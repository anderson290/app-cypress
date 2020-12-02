import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  userData : any = null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(res => {
      this.userData = res;
    });
  }

}
