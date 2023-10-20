import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/Footer/footer.component';
import { HeaderComponent } from '../../components/Header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FooterComponent, HeaderComponent, RouterOutlet],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    heroImg = '../../assets/img/home/hero/hero.jpg';
}
