import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createCvaProviders } from 'src/app/shared/basic-cva/basic-cva.component';
import { CustomizableCvaComponent } from 'src/app/shared/customizable-cva/customizable-cva.component';
import { PreferredContact } from 'src/app/shared/models/preferred-contact.enum';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButton
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  providers: createCvaProviders(ContactFormComponent),
})
export class ContactFormComponent extends CustomizableCvaComponent {
  public contactTypes: { id: number, name: string }[] = [
    { id: PreferredContact.EMAIL, name: 'Email' },
    { id: PreferredContact.PHONE, name: "Phone" },
    { id: PreferredContact.NO_CONTACT, name: 'No Contact' }
  ];

  createForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      preferredContact: new FormControl(PreferredContact.EMAIL, [Validators.required])
    });
  }

  constructor() {
    super();
  }

  submitForm(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
  }

}
