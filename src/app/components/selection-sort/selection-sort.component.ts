import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection-sort.component.html',
  styleUrl: './selection-sort.component.scss'
})
export class SelectionSortComponent {
  array: number[] = [ 25,9, 12, 22, 11,5,15];
  sortedArray: number[] = [];

  async selectionSort() {
    const n = this.array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (this.array[j] < this.array[minIdx]) {
          minIdx = j;
        }
      }
      // Swap array[i] and array[minIdx]
      const temp = this.array[i];
      this.array[i] = this.array[minIdx];
      this.array[minIdx] = temp;
      this.sortedArray = [...this.array]; // Update sorted array for visualization
      await this.delay(1000); // Delay for visualization
    }
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
