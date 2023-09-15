import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckedPropertyComponent } from './unchecked-property.component';

describe('UncheckedPropertyComponent', () => {
  let component: UncheckedPropertyComponent;
  let fixture: ComponentFixture<UncheckedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncheckedPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncheckedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
