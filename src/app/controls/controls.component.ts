import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService, IServiceData } from '../data.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  image_test = '/assets/images/add.png';
  counter_data: number = 1;
  title = 'заголовок';
  txt_color = 'red';

  constructor(private _dataService: DataService) {}

  @Output() bClickEvent: EventEmitter<number> = new EventEmitter<number>();

  btnClicked() {
    this.counter_data++;
    this.bClickEvent.emit(this.counter_data);
  }

  resetCounter() {
    this.counter_data = 0;
    this._dataService.resetCounter();
  }

  // onInput(e) {
  //   this.title = e.target.value;
  // }

  onInput(val: string) {
    this.title = val;
  }

  onModelChange() {
    console.log(this.title);
  }

  ngOnInit(): void {
    let isFirstImage = true;
    setInterval(() => {
      isFirstImage = !isFirstImage;
      this.image_test = isFirstImage
        ? '/assets/images/add.png'
        : '/assets/images/info.png';
    }, 5000);
  }
}
