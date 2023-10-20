import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    logo = '../../assets/img/footer/footer-logo.png';

    imagesLinks = [
        {
            src: '../../assets/img/footer/vk.png',
            name: 'VK',
            link: 'link',
        },
        {
            src: '../../assets/img/footer/telegram.png',
            name: 'Telegram',
            link: 'link',
        },
        {
            src: '../../assets/img/footer/youtube.png',
            name: 'Youtube',
            link: 'link',
        },
    ];

    imagesCards = [
        {
            src: '../../assets/img/footer/cards/modulebank.png',
            name: 'ModuleBank',
            link: 'link',
        },
        {
            src: '../../assets/img/footer/cards/visa.png',
            name: 'Visa',
            link: 'link',
        },
        {
            src: '../../assets/img/footer/cards/mastercard.png',
            name: 'Mastercard',
            link: 'link',
        },
        {
            src: '../../assets/img/footer/cards/maestro.png',
            name: 'Maestro',
            link: 'link',
        },
        {
            src: '../../assets/img/footer/cards/mir.png',
            name: 'Mir',
            link: 'link',
        },
    ];
}
