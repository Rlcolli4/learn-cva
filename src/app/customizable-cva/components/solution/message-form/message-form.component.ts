import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createCvaProviders } from 'src/app/shared/basic-cva/basic-cva.component';
import { CustomizableCvaComponent } from 'src/app/shared/customizable-cva/customizable-cva.component';
import { Department } from 'src/app/shared/models/department.enum';
import { Urgency } from 'src/app/shared/models/urgency.enum';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButton
  ],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss',
  providers: createCvaProviders(MessageFormComponent),
})
export class MessageFormComponent extends CustomizableCvaComponent {
  public urgencyOptions: { id: Urgency, name: string }[] = [
    { id: Urgency.NONURGENT, name: "Question" },
    { id: Urgency.LOW, name: "Low Priority" },
    { id: Urgency.MEDIUM, name: "Medium Priority" },
    { id: Urgency.HIGH, name: "High Priority" }
  ];

  public departmentOptions: { id: Department, name: string }[] = [
    { id: Department.SUPPORT, name: "Support" },
    { id: Department.SALES, name: "Sales" },
    { id: Department.BILLING, name: "Billing" }
  ]


  createForm(): FormGroup {
    return new FormGroup({
      urgency: new FormControl(Urgency.NONURGENT),
      department: new FormControl(Department.SUPPORT),
      message: new FormControl("", [Validators.required])
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
