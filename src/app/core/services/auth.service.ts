import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";

import { environment } from '@env';
import { Auth } from '@core/models/auth.model';
import { User } from '@core/models/user.model';
import { TokenService } from '@core/services/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;
  
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,

    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  getCurrentUser() {
    const token = this.tokenService.getToken();
    if (token) {
      this.getProfile()
      .subscribe()
    }
  }

  login(username: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}oauth/signin`, {username, password})
    .pipe(
      tap((response: any) => this.tokenService.saveToken(response.Data.CredentialsToken)),
      catchError((error: HttpErrorResponse)=>{
          let message = error.error.description;
          if (error.status === HttpStatusCode.Conflict) {
            this.showMessage('Something is wrong on the server', message);
            return throwError( ()=> 'Something is wrong on the server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            this.showMessage('No data found.', message);
            return throwError( ()=> 'No data found.');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            this.showMessage('Your session has expired.', message);
            return throwError( ()=> 'Your session has expired.');
          }
          if (error.status === HttpStatusCode.BadRequest) {
            this.showMessage('A problem occurred in the request.', message);
            return throwError( ()=> 'A problem occurred in the request.');
          }
          if (error.status === HttpStatusCode.Forbidden) {
            this.showMessage('You do not have permissions to perform this action.', message);
            return throwError( ()=> 'You do not have permissions to perform this action.');
          }
          this.showMessage('Oops something went wrong', message);
          return throwError( ()=> 'Oops something went wrong');
      }),
    );
  }

  getProfile() {
    return this.http.get<User>(`${this.apiUrl}/profile`)
    .pipe(
      tap(user => this.user.next(user))
    );
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.getProfile()),
    )
  }

  logout() {
    this.tokenService.removeToken();
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  showMessage(title: string, message: string, callback = () => { }) {
    /* this.dialog.closeAll();
    const dialogRef = this.dialog.open(
      AlertComponent,
      {
        data: {
          title: title,
          html: `<p class="text-center text-01">${message}</p>`,
          icon: 'fa-thin fa-triangle-exclamation',
          buttonText: 'Close',
        },
        width: '100%',
        maxWidth: '24rem',
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      callback();
    }); */
  }

}