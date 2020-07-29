import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IArrElement } from './../app.component';

@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.css'],
})
export class ElemComponent implements OnInit {
  @Input() el: IArrElement;

  constructor() {}

  ngOnInit(): void {}
}
