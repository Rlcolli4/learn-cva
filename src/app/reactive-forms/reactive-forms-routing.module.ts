import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonComponent } from "./components/lesson/lesson.component";
import { SolutionComponent } from "./components/solution/solution.component";

const reactiveFormsRoutes: Routes = [
  { path: "solution", component: SolutionComponent },
  { path: "", component: LessonComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forChild(reactiveFormsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReactiveFormsRouting { }