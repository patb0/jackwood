import { Component } from '@angular/core';
import { RealistaionElementComponent } from '../realistaion-element/realistaion-element.component';
import { Realisations } from '../../../models/realisations';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-realisations-carousel',
  standalone: true,
  imports: [
    RealistaionElementComponent,
    CarouselModule,
    ImageModule
  ],
  templateUrl: './realisations-carousel.component.html',
  styleUrl: './realisations-carousel.component.scss'
})
export class RealisationsCarouselComponent {
  projects = new Realisations().projects;
}
