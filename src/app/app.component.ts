import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-cypress-testing';

  disableButtonTest = false;

  handlePressButtonTest() {
    console.log(this.disableButtonTest);
    this.disableButtonTest = !this.disableButtonTest;
  }

  handlePressButtonTestDisabled() {
    console.log(this.disableButtonTest);
  }
}
