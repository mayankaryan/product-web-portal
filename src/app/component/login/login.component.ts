import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor ( private httpService: HttpService, private router: Router) {}

  

  submit() {
    if (this.form.valid) {
      //---------- getting all user login credentials
      this.httpService.getLogin().subscribe({
        next: (res:any) => {
          let loginSuccess = false;
          //-------- iterating over all user's login credentials to validate the input credential
          for(let item of res){
            //---------- for valid login cred
            if(item.username == this.form.value.username && item.password == this.form.value.password) {
              loginSuccess = true;
              this.router.navigate(['./dashboard']);  
            }
          }
          //-------- for invalid login cred
          if( !loginSuccess ){
            alert('invalid username or password');
          }
        }
      })
    }
  }

}
