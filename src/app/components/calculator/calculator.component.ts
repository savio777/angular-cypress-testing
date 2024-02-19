import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  public input1: number = 0;
  public input2: number = 0;

  setValueInput1(event: { target: HTMLInputElement }) {
    this.input1 = Number(event.target.value);
  }

  setValueInput2(event: { target: HTMLInputElement }) {
    this.input2 = Number(event.target.value);
  }
}
