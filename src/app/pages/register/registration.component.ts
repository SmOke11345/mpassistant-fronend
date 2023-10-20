import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-modal-registration',
    standalone: true,
    // Нужно для подключения сервиса
    providers: [AuthenticationService],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    inputType: string = 'password';
    isChecked: boolean = true;

    errors: string[] = [];

    form = new FormGroup({
        full_name: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)],
            nonNullable: true,
        }),
        tel: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
        }),
        promo_code: new FormControl('', {
            nonNullable: true,
        }),
        confirm: new FormControl(this.isChecked, {
            validators: [Validators.required],
            nonNullable: true,
        }),
    });

    constructor(public authService: AuthenticationService) {}

    /**
     * Изменение состояния чекбокса
     */
    changeIsChecked() {
        this.isChecked = !this.isChecked;
    }

    /**
     * Отображение / скрытие пароля
     */
    changeInputType() {
        this.inputType = this.inputType === 'password' ? 'text' : 'password';
    }

    /**
     * Шаблон для поля ввода телефона
     */
    patternValueTel() {
        const valueInput = this.form.controls['tel'];
        if (valueInput.value.length === 1) {
            valueInput.setValue('+7 (' + valueInput.value);
        } else if (valueInput.value.length === 7) {
            valueInput.setValue(valueInput.value + ') ');
        } else if (
            valueInput.value.length === 12 ||
            valueInput.value.length === 15
        ) {
            valueInput.setValue(valueInput.value + '-');
        }
    }

    handleData() {
        // Подписываемя на сервис, чтобы получить данные для вылидации полей
        this.authService.register({ ...this.form.value }).subscribe({
            next: (response) => {
                console.log('User create successfully', response);
            },
            error: (error) => {
                this.errors = error.error.message;
            },
            complete: () => {
                this.form.reset();
                this.errors = [];
            },
        });
    }

    /**
     * Отправляем данные формы на сервер
     */
    async onsubmit() {
        this.authService
            .checkEmail(this.form.controls['email'].value)
            .subscribe({
                next: (success) => {
                    if (success) {
                        console.log(success);
                        this.errors = [
                            'Пользователь с таким e-mail уже существует',
                        ];
                    } else {
                        this.errors = [];
                        this.handleData();
                    }
                },
            });
    }
}
