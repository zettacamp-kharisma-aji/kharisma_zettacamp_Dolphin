import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedPropertyComponent } from './checked-property.component';

describe('CheckedPropertyComponent', () => {
  let component: CheckedPropertyComponent;
  let fixture: ComponentFixture<CheckedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
