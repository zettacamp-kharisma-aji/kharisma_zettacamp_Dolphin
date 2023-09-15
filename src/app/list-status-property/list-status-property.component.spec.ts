import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusPropertyComponent } from './list-status-property.component';

describe('ListStatusPropertyComponent', () => {
  let component: ListStatusPropertyComponent;
  let fixture: ComponentFixture<ListStatusPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatusPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
