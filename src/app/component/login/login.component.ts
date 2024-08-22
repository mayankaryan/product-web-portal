import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';

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
  loginCredential: any ;

  constructor ( private httpService: HttpService) {}

  

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.httpService.getLogin().subscribe({
        next: (res:any) => {
          console.log(res);
          this.loginCredential = res;
        }
      })
    }
  }

}
