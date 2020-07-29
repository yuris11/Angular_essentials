import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemComponent } from './elem.component';

describe('ElemComponent', () => {
  let component: ElemComponent;
  let fixture: ComponentFixture<ElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
