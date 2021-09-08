import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {
  }

  needsUpdate() {
    alert("Sorry I need to update this still.")
  }
}
