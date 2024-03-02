import { Component } from '@angular/core';
import { Projects } from '../../models/projects';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    GalleriaModule,
    ImageModule
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projects = new Projects().projects;
}
