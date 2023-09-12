import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorMessageComponent } from './author-message.component';

describe('AuthorMessageComponent', () => {
  let component: AuthorMessageComponent;
  let fixture: ComponentFixture<AuthorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
