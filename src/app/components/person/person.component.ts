import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input() name: string = '';
  @Input() birthday: Date = new Date();

  public age: number = 0;

  calculateAge() {
    const month_diff = Date.now() - this.birthday.getTime();

    const age_dt = new Date(month_diff);

    const year = age_dt.getUTCFullYear();

    this.age = Math.abs(year - 1970);
  }
}
