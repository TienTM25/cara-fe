import { Component, OnInit } from '@angular/core';
// import { UserInfo } from 'os';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this.user = JSON.parse(localStorage.getItem('user') || '[]');
    if(this.user.length <= 0){
      this.router.navigateByUrl('/login');
    }   
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
  }

  updateUser(id: number){
    this.userService.updateUser(id, this.user[0]).subscribe(user => {
      console.log(this.user);
    });
  }
}
