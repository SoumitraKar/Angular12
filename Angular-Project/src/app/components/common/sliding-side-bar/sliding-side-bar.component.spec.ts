import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingSideBarComponent } from './sliding-side-bar.component';

describe('SlidingSideBarComponent', () => {
  let component: SlidingSideBarComponent;
  let fixture: ComponentFixture<SlidingSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
