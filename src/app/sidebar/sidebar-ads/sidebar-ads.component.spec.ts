import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdsComponent } from './sidebar-ads.component';

describe('SidebarAdsComponent', () => {
  let component: SidebarAdsComponent;
  let fixture: ComponentFixture<SidebarAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
