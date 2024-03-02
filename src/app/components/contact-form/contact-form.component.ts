import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
  formBuilder = inject(UntypedFormBuilder);
  formGroup!: UntypedFormGroup;
  isSumitted = false;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      description: ['', Validators.required]
    })
  }

  get checkValid() : { [key:string]: AbstractControl } {
    return this.formGroup.controls
  }

  onSubmit() {
    this.isSumitted = true;
    // logika
    this.isSumitted = false;
  }
}
