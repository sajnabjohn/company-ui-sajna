import { apis } from 'src/app/config/api.config';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { HttpConnectionService } from './http-connection.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private httpService: HttpConnectionService,
        private router: Router,
        private notifyService: NotifyService
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    // POST: Login to the application
    login(usercode: string, password: string): Observable<any> {
        return this.httpService.post_auth(apis.auth.login, { usercode, password })
            .pipe(map(response => {
                // Store user details and jwt token in local storage to keep user logged in between page refreshes
                let user: User = Object.assign({}, response['payload']);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    // POST: Logout from the application
    logout() {
        // Remove user from local storage to log user out
        this.httpService.post(apis.auth.logout).subscribe(
            (data: any) => {
                if (localStorage.getItem('currentUser'))
                    localStorage.removeItem('currentUser');
                this.currentUserSubject.next(null);
                this.router.navigate(['/user/login']);
            }
        )

    }

    /*-------CHANGE PASSWORD--------*/
    // POST: Verify usercode and current password
    verifyUserCodeAndPassword(usercode: string, password: string): Observable<any> {
        return this.httpService.post_auth(apis.auth.verify_user, { usercode, password })
            .pipe(map(response => {
                return response['payload'];
            }));
    }

    // POST: Change password
    changePassword(usercode: string, currentPassword: string, newPassword: string, confirmPassword: string): Observable<any> {
        return this.httpService.post_auth(
            apis.auth.change_password,
            { usercode, currentPassword, newPassword, confirmPassword }
        )
            .pipe(map(response => {
                return response['payload'];
            }))
    }

    /*-------FORGOT PASSWORD--------*/
    // GET: Verify usercode and get user details
    verifyUserCode(usercode: string): Observable<any> {
        return this.httpService.get(`${apis.auth.verify_user_code}/${usercode}`)
            .pipe(map(response => {
                return response['payload'].employee;
            }));
    }

    // POST: Verify OTP
    verifyOTP(otp): Observable<any> {
        return this.httpService.post_auth(apis.auth.verify_otp, { otp })
            .pipe(map(response => {
                return response['payload'];
            }))
    }

    // POST: Change password
    forgotPassword(usercode: string, newPassword: string, confirmPassword: string) {
        return this.httpService.post_auth(apis.auth.forgotpassword, { usercode, newPassword, confirmPassword })
            .pipe(map(response => {
                return response['payload'];
            }))
    }
}
