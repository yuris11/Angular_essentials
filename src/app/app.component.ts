import { Component, ViewEncapsulation } from '@angular/core';
export interface IArrElement {
  type: string;
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'awarm57';
  data1 = 'data-from-parent1';
  data2 = 'data-from-parent2';
  arr_data: IArrElement[] = [
    /*
		{ type: 'Велосипед', count: 1 },
		{ type: 'Компьютер', count: 2 },
		*/
  ];

  constructor() {}

  showCounter(event: number) {
    console.log(`counter=${event}`);
  }

  updateDataArr(data: IArrElement) {
    this.arr_data.unshift(data);
  }
}
