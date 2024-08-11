import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { createCvaProviders } from 'src/app/shared/basic-cva/basic-cva.component';
import { CustomizableCvaComponent } from 'src/app/shared/customizable-cva/customizable-cva.component';
import { ContactForm } from 'src/app/shared/models/contact-form.model';
import { Department } from 'src/app/shared/models/department.enum';
import { PreferredContact } from 'src/app/shared/models/preferred-contact.enum';
import { Urgency } from 'src/app/shared/models/urgency.enum';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { MessageFormComponent } from "../message-form/message-form.component";

@Component({
  selector: 'app-solution-form',
  standalone: true,
  imports: [
    MessageFormComponent,
    ContactFormComponent,
    ReactiveFormsModule,
    MessageFormComponent,
    MatButtonModule
  ],
  templateUrl: './solution-form.component.html',
  styleUrl: './solution-form.component.scss',
  providers: createCvaProviders(SolutionFormComponent),
})
export class SolutionFormComponent extends CustomizableCvaComponent {

  createForm(): FormGroup {
    return new FormGroup({
      contact: new FormControl(null),
      message: new FormControl(null)
    });
  }

  constructor() {
    super();
    this.formValues = {
      contact: ({
        firstName: "John",
        lastName: "Doe",
        phone: "555-555-5555",
        address: "1234 Elm St",
        city: "Springfield",
        state: "IL",
        zip: "62701",
        preferredContact: PreferredContact.EMAIL,
        email: "fake@gmail.com",
      } as ContactForm),
      message: {
        urgency: Urgency.MEDIUM,
        department: Department.BILLING,
        message: "My bill was incorrect."
      }
    };
  }

  submitForm(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
  }
}