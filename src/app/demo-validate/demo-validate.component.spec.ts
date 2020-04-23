import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoValidateComponent } from './demo-validate.component';

describe('DemoValidateComponent', () => {
  let component: DemoValidateComponent;
  let fixture: ComponentFixture<DemoValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
