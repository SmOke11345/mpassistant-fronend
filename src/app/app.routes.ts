import { Route } from '@angular/router';
import { RegistrationComponent } from './pages/register/registration.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'register',
        component: RegistrationComponent,
    },
];
