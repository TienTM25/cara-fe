import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  checkUser: any = localStorage.getItem('user');
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if(this.checkUser){
      this.router.navigateByUrl('/user-info');
    }else{
      this.initForm();
    }
    this.initForm();
  }

  rememberMe(){
    let user = localStorage.getItem('user');
    return user;
  }

  login(){
    if(this.form.invalid){
      alert('Check Your Information');
      return;
    }
    const userLogin = this.form.value;
    this.userService.get().subscribe((userData: any[]) => {
      const exist = userData.filter(user => user.username == userLogin.username && user.password == userLogin.password);
      if (exist.length > 0) {
        localStorage.setItem('user', JSON.stringify(exist));
        this.router.navigateByUrl('/user-info');
      } else {
        alert('User not found');
      }
    } )
  }

  initForm(){
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
}
