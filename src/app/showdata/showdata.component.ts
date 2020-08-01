import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { DataService, IPerson, IServiceData } from '../data.service';
import { IArrElement } from './../app.component';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ShowdataComponent implements OnInit {
  type = '';
  count = null;
  persons: IPerson[] = [];
  serviceData: IServiceData;

  @Output()
  onAddData: EventEmitter<IArrElement> = new EventEmitter<IArrElement>();

  @Input('d1') d1: string;
  @Input('d2') d2: string;
  @Input() arr_data: IArrElement[]; //data from parent

  @ViewChild('inputType', { static: true }) inputTypeInit: ElementRef;
  @ViewChild('inputType', { static: false }) inputTypeBtn: ElementRef;

  constructor(private _dataService: DataService) {}

  localdata1 = 'data1-local';

  public showPerson(index: number, person: IPerson): string {
    return `${index}) ${person.name} ${person.age}`;
  }

  addData() {
    this.inputTypeBtn.nativeElement.focus();
    let element: IArrElement = {
      type: '',
      count: null,
    };
    element.type = this.type.trim();
    element.count = this.count;
    if (element.type && element.count && element.count >= 0) {
      this.onAddData.emit(element);
      this.type = '';
      this.count = null;
    }
  }

  ngOnInit() {
    this.inputTypeInit.nativeElement.focus();
    this.persons = this._dataService.getPersons();
    this.serviceData = this._dataService.serviceData;
  }
}
