import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent } from "./components/lesson/contact-form/contact-form.component";
import { SolutionFormComponent } from "./components/solution/solution-form/solution-form.component";

const customizableCvaRoutes: Routes = [
  { path: "solution", component: SolutionFormComponent },
  { path: "", component: ContactFormComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forChild(customizableCvaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomizableCvaFormsRouting { }