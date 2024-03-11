import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-realistaion-element',
  standalone: true,
  imports: [
    ImageModule,
    CarouselModule
  ],
  templateUrl: './realistaion-element.component.html',
  styleUrl: './realistaion-element.component.scss'
})
export class RealistaionElementComponent {
  @Input() imagesUrls?: string[];
  @Input() title: string = "";
}
