// Сервис
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export interface IPerson {
  name: string;
  age: number;
}

export interface IServiceData {
  counter: number;
}

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class DataService {
  constructor() {
    setInterval(() => {
      this._serviceData.counter++;
    }, 1000);
  }

  private _serviceData: IServiceData = {
    counter: 0,
  };

  private persons: IPerson[] = [
    { name: 'Юрий Cорокин', age: 61 },
    { name: 'Валерий Мошкин', age: 59 },
    { name: 'Зинаида Сорокина', age: 86 },
  ];

  public getPersons(): IPerson[] {
    return this.persons;
  }

  public get serviceData(): IServiceData {
    return this._serviceData;
  }

  public resetCounter(): void {
    this._serviceData.counter = 0;
  }
}
