import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble-sort.component.html',
  styleUrl: './bubble-sort.component.scss'
})
export class BubbleSortComponent {
  numbers = [4, 7, 1, 9, 3, 5, 8, 2, 6];

  async sort() {
    for (let i = 0; i < this.numbers.length - 1; i++) {
      for (let j = 0; j < this.numbers.length - i - 1; j++) {
        if (this.numbers[j] > this.numbers[j + 1]) {
          await this.swap(j, j + 1);
        }
      }
    }
  }

  async swap(i: number, j: number) {
    await this.delay(100); // Delay for visualization
    const temp = this.numbers[i];
    this.numbers[i] = this.numbers[j];
    this.numbers[j] = temp;
    //this.numbers=[...this.numbers];
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
