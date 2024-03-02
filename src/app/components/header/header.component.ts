import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { HeaderData } from '../../models/header-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = new HeaderData();
}
