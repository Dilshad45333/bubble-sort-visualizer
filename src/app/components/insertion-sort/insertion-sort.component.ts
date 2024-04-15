import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insertion-sort.component.html',
  styleUrl: './insertion-sort.component.scss'
})
export class InsertionSortComponent {
  array: number[] = [5, 3, 8, 6, 2, 7, 1, 4];

  sort() {
    for (let i = 1; i < this.array.length; i++) {
      let current = this.array[i];
      let j = i - 1;
      while (j >= 0 && this.array[j] > current) {
        this.array[j + 1] = this.array[j];
        j--;
      }
      this.array[j + 1] = current;
    }
  }
}
