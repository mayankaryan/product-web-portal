import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('',[ Validators.minLength(4), Validators.required ]),
    email: new FormControl('', [ Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6),Validators.required]),
  });

  constructor(private httpService: HttpService, private router: Router) { }

  submit() {
    // console.log(!this.form.value.username);
    if ( this.form.value.username && this.form.value.email && this.form.value.password) {

      this.httpService.postSignin(this.form.value).subscribe({
        next: (res: any) => {
          this.router.navigate(['']);
        },
        error: (err: any) => {
          console.log('signin failed..' + err);
        }
      });
    }
  }
}
