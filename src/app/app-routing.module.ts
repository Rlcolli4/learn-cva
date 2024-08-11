import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: "base-cva", loadChildren: () => import('./base-cva/base-cva.module').then(m => m.BaseCvaModule) },
  { path: "customizable-cva", loadChildren: () => import('./customizable-cva/customizable-cva.module').then(m => m.CustomizableCvaModule) },
  { path: "reactive-form", loadChildren: () => import('./reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsModule) },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class AppRoutingModule { }
