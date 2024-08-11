
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PreferredContact } from 'src/app/shared/models/preferred-contact.enum';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButton
  ],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {
  public contactTypes: { id: number, name: string }[] = [
    { id: PreferredContact.EMAIL, name: 'Email' },
    { id: PreferredContact.PHONE, name: "Phone" },
    { id: PreferredContact.NO_CONTACT, name: 'No Contact' }
  ];
  public form: FormGroup = new FormGroup({
    firstName: new FormControl<string | null>(null, [Validators.required]),
    lastName: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [this.contactRequired.bind(this)]),
    phone: new FormControl<string | null>(null, [this.contactRequired.bind(this)]),
    address: new FormControl<string | null>(null, [Validators.required]),
    city: new FormControl<string | null>(null, [Validators.required]),
    state: new FormControl<string | null>(null, [Validators.required]),
    zip: new FormControl<string | null>(null, [Validators.required]),
    preferredContact: new FormControl<PreferredContact>(PreferredContact.NO_CONTACT, [Validators.required])
  });

  submitForm(): void {
    console.log(this.form.valid);
    console.log(this.form.value);
  }

  getContactError(): string {
    const currentError = this.contactRequired(this.form);
    if (currentError) {
      if (currentError.noEmail) {
        return "requiredEmail";
      } else if (currentError.noPhone) {
        return "requiredPhone";
      }
    }
    return "";
  }

  private contactRequired(formControl: AbstractControl): any {
    if (this.form) {
      const contactType = this.form.get('preferredContact');
      const emailValue = this.form.get('email');
      const phoneValue = this.form.get('phone');
      if (contactType) {
        if (contactType.value === PreferredContact.EMAIL) {
          if (!this.stringValueSet(emailValue)) {
            return { noEmail: true };
          }
        } else if (contactType.value === PreferredContact.PHONE) {
          if (!this.stringValueSet(phoneValue)) {
            return { noPhone: true };
          }
        }
      }
    }
    return null
  }

  private stringValueSet(formControl: AbstractControl<any, any> | null): boolean {
    if (!formControl) {
      return false;
    } else if (formControl.value === null || formControl.value === undefined) {
      return false;
    } else if ((formControl.value as string).trim() === "") {
      return false;
    }
    return true;
  }
}
