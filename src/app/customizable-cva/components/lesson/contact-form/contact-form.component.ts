import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BasicCvaComponent, createCvaProviders } from 'src/app/shared/basic-cva/basic-cva.component';
import { ContactForm } from 'src/app/shared/models/contact-form.model';
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
export class ContactFormComponent extends BasicCvaComponent {
  public contactTypes: { id: number, name: string }[] = [
    { id: PreferredContact.EMAIL, name: 'Email' },
    { id: PreferredContact.PHONE, name: "Phone" },
    { id: PreferredContact.NO_CONTACT, name: 'No Contact' }
  ];
  constructor() {
    super();
    this.formValues = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@faker.co",
      phone: "555-555-5555",
      address: "1234 Elm St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      preferredContact: PreferredContact.EMAIL
    } as ContactForm;
  }

  submitForm(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
  }

}
