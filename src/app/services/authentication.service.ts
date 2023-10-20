import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { FormControl, ɵValue } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    errors: string[] = [];

    constructor(private http: HttpClient) {}

    // Возможно, на будующее
    // login() {}
    // logout() {}

    checkEmail(email: string): Observable<boolean> {
        return this.http.get<boolean>(
            `http://localhost:3000/api/register/validation?email=${email}`,
        );
    }

    /**
     * Регистрация нового пользователя
     * @param data
     */
    register(data: {
        confirm?: ɵValue<FormControl<boolean>>;
        password?: ɵValue<FormControl<string>>;
        full_name?: ɵValue<FormControl<string>>;
        tel?: ɵValue<FormControl<string>>;
        promo_code?: ɵValue<FormControl<string>>;
        email?: ɵValue<FormControl<string>>;
    }): Observable<Users> {
        return this.http.post<Users>(
            'http://localhost:3000/api/register',
            data,
        );
    }
}
