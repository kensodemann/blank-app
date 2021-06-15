import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedSegment = "both";

  constructor() {}

  refreshChart() {
    console.log('change', this.selectedSegment);
  }
}
