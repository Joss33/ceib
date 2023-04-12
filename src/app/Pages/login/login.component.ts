import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

//services
import { AuthService } from '@core/services/auth.service';
import { GlobalService } from '@core/services/global.service';
import { TokenService } from '@core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  get username() {return this.form.get('username')};
  get password() {return this.form.get('password')};

  constructor(
    private globalService: GlobalService,
    private authService: AuthService,
    private tokenService: TokenService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authorized()){
      this.router.navigate(['/app/summary-cash']);
    }
  }

  authorized(): string | null{
    return this.tokenService.getToken();
  }

  signIn(){
    if(this.form.valid){
      this.authService.login(this.username?.value, this.password?.value).subscribe(
      {
        next: (res: any)=>{
          this.router.navigate(['/cursos']);
        },
        complete: ()=>{
          this.globalService.setLoading(false);
        }
      }
      )
    }
  }

}
