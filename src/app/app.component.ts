import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/Header/header.component';
import { FooterComponent } from './components/Footer/footer.component';
import { RegistrationComponent } from './pages/register/registration.component';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        NgOptimizedImage,
        HeaderComponent,
        FooterComponent,
        RegistrationComponent,
        AsyncPipe,
        NgIf,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
