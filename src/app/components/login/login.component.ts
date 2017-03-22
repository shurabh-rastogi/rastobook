import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SharedService } from '../../modules/shared/services/share.service';
import { User } from '../../modules/shared/models/user.model';

@Component({
  selector: 'app--login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private loginError: string;
  private userList: Observable<User[]>;
  private userDetail: Observable<User>;

  constructor(
    private sharedSerivce: SharedService, 
    private router: Router, 
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.userList = this.sharedSerivce.getAllUsers();
  }

  appLogin(form: any, valid: boolean){
    this.sharedSerivce.getLoginUserDetail(form.email, form.password).subscribe((user: User) => {
      if(user != undefined && user != null){
        this.sharedSerivce.updateUserDetail(user);
        this.router.navigate(['/profile']);
      } else {
        this.loginError = 'No User Found';
      }
    });
    return valid;
  }

}
