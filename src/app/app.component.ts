import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'learn-cva';
  showFiller: boolean = true;

  constructor(private router: Router) { }

  routeTo(route: string) {
    this.router.navigate([route]);
  }

}