import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  
  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      is_active: [''],
      address: [''],
      city: [''],
      nation: [''],
      job: [''],
    })
  }

  register(){
    if(this.form.invalid){
      alert('Check Your Information');
      return;
    }
    const user = this.form.value;
    this.userService.register(user).subscribe(data => {
      alert('Register Success');
    });
  }
}
