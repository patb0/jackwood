import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ContactFormComponent,
    ContactInfoComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
