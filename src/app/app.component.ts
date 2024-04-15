import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BubbleSortComponent } from "./components/bubble-sort/bubble-sort.component";
import { CommonModule } from '@angular/common';
import { SelectionSortComponent } from './components/selection-sort/selection-sort.component';
import { InsertionSortComponent } from './components/insertion-sort/insertion-sort.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, 
            BubbleSortComponent,
            CommonModule,
            SelectionSortComponent,
            InsertionSortComponent
          ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'bubble-sort-visualizer';
}
