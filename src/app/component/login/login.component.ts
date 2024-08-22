import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor ( private httpService: HttpService, private router: Router) {}

  

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);

      // getting all user login credentials
      this.httpService.getLogin().subscribe({
        next: (res:any) => {

          // iterating over all user's login credentials to validate the input credential
          for(let item of res){
            if(item.username == this.form.value.username && item.password == this.form.value.password) {
              this.router.navigate(['./dashboard']);
            }
          }
        }
      })
    }
  }

}
