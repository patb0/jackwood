import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterData } from '../../models/footer-data';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  data = new FooterData();
}
