import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioDisplayComponent } from './radio-display.component';

describe('RadioDisplayComponent', () => {
  let component: RadioDisplayComponent;
  let fixture: ComponentFixture<RadioDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
